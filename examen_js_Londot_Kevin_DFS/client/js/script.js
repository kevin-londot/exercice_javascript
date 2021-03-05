
let myListe = document.querySelector('#myListe');
let btn = document.querySelector('#btn');

let myHeaders = new Headers();
let url ="/liste";
let options = {
    method: "GET" ,

}

fetch(url, options)
        .then((res) => {
          if(res.ok){
          return res.json();
          }
        })
        .then((response) => {
            response.forEach(elt => {
                newLine(elt);
            });
        });
          

        
    function newLine(tmp) {
      let line = document.createElement('tr');
      line.innerHTML = `
        <td>${tmp.id}</td>
        <td>${tmp.name}</td>
        <td>${tmp.level}</td>
        <td>${tmp.type}</td>
        <td>${tmp.description}</td>
        <td><a href="details.html#${tmp.id}">Détails</a></td>
        <td><button class="btn btn-outline-danger" id="del${tmp.id}"> S </button></td>
      `;
      myListe.appendChild(line);

      let btnSupr = document.querySelector('#del' + tmp.id);
        btnSupr.addEventListener('click', () => {
        deleteFamilier(tmp.id);
  });
    }

function deleteFamilier(tmp) {
    let myHeaders = new Headers();
    let opt = {
        method: 'DELETE',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
        };
      
    fetch('/liste/' + tmp, opt)
        .then(() => {
            window.location.href = '/pages/liste.html';
        })
        .catch((err) => {
            console.log('Error ' + err);
          })
      }
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        addFamilier();
      });
      
function addFamilier() {
    let id = document.querySelector('#id'); 
    let name = document.querySelector('#name');
    let level = document.querySelector('#level');
    let type = document.querySelector('#type');
    let description = document.querySelector('#description');
  
    let tmp = {
      id: id.value,
      name: name.value,
      level: level.value,
      type: type.value,
      description: description.value
    };
    
    let opt = {
        method: 'POST',
        body: JSON.stringify(tmp),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      fetch('/liste', opt)
        .then((res) => {
          id.value=''
          name.value = '';
          level.value = '';
          type.value = '';
          description.value = '';
          console.log(res)
          return res.json();
        })
        .then((response) => {
            console.log(response)
          newLine(response);
        })
        .catch((res) => {
          console.log(res);
        })
} 