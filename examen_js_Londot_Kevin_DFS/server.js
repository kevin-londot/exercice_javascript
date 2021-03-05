const express = require("express");
const Liste = require("./data/liste.js");
const Familier = require('./client/js/familier.js');
const bodyParser = require('body-parser');
// const Ajout = require("./client/liste.js");
let app = express();


app.use('/pages', express.static('./client/pages'));
app.use('/js', express.static('./client/js'));
app.use('/style', express.static('./client/css'));
app.use('/img', express.static('./client/img'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Listening on port 3000 !");
});

app.get('/', (req ,res) => {
    res.sendFile(__dirname + '/client/index.html');
});

// on récupère notre liste de familier 
app.get('/liste' , (req, res) => {
    res.send(Liste);
})


// on ajoute un familier a lafin de la liste
app.post('/liste', (req, res) => {

    let obj = {
        id: req.body.id,
        name: req.body.name,
        level: req.body.level,
        type: req.body.type,
        description: req.body.description
    };

    console.log(obj)
     Liste.push(obj);
       return res.send(obj);
    });
    
// on recupere le familier auquel l'id est egale a celle spécifié dans l'url 
app.get('/liste/:id', (req, res) => {
    for (let i =0 ; i< Liste.length ;i++) {
        if (Liste[i].id== req.params.id ) {
            obj =Liste[i];
        }
    }
      return res.send(obj);
    });

// on modifie les champ du familier sélectionné
app.put('/liste/:id', (req, res) => {
    for (let i =0 ; i< Liste.length ;i++) {
        if (Liste[i].id== req.params.id ) {
            Liste[i].id = req.body.id;
            Liste[i].name = req.body.name;
            Liste[i].level = req.body.level;
            Liste[i].type = req.body.type;
            Liste[i].description = req.body.description;
            break;
        }
    }
        return res.send(obj);
    });

// on supprime le familier
app.delete('/liste/:id', (req, res) => {
    for (let i =0 ; i< Liste.length ;i++) {
        if (Liste[i].id== req.params.id ) {
            Liste.splice(i , 1);
            break
        }
    }
      return res.sendStatus(200);
    });
//(et on lui dit au revoir aussi)