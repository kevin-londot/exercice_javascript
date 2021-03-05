let id = document.querySelector('#id'); 
let name = document.querySelector('#name');
let level = document.querySelector('#level');
let type = document.querySelector('#type');
let description = document.querySelector('#description');

let btn = document.querySelector('#btn');
let url = window.location;
let familierId = url.hash.substring(1);


let myHeaders = new Headers();
let opt = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};
fetch(`/liste/${familierId}`, opt)
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    id.value = response.id
    name.value = response.name;
    level.value = response.level;
    type.value = response.type;
    description.value = response.description;
  })
  .catch((err) => {
    console.log('Error : ' + err);
  })

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    let tmp = {
      id:id.value,
      name: name.value,
      level: level.value,
      type: type.value,
      description: description.value
    };
  
    let opt = {
      method: 'PUT',
      body: JSON.stringify(tmp),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    fetch(`/liste/${familierId}`, opt)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        window.location.href = '/pages/liste.html';
      })
      .catch((res) => {
        console.log(res);
      })
  })