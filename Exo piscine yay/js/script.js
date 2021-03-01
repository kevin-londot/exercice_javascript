var pointjoueur = 0;
var pointordi = 0 ;
function choixJoueur(choix) {

    console.log (choix)
    
    var img = document.getElementById( 'choixjoueur' );
    switch (choix) {
        case 'pierre':
            img.setAttribute("src", "img/pierre.PNG");
            break;
        case 'ciseau':
            img.setAttribute("src", "img/ciseau.PNG");
            break;
        case 'feuille':
            img.setAttribute("src", "img/feuille.PNG");
            break;
    }
    var choixordi = ['pierre' , 'feuille' , 'ciseau'];
    var imgordi = document.getElementById( 'choixordinateur' );

    var numerochoix=Math.floor(Math.random() * Math.floor(3));
    var choixfait= choixordi[numerochoix];

    console.log(choixfait);


    switch (choixfait) {
        case 'pierre':
            imgordi.src = "img/pierre.PNG"
            break;
        case 'ciseau':
            imgordi.src = "img/ciseau.PNG"
            break;
        case 'feuille':
            imgordi.src = "img/feuille.PNG"
            break;
    }

    var confrontation = "";

    if (choix == choixfait ){
        confrontation = "match nul";
    }
    else if (choix == 'pierre' && choixfait == 'feuille' ){
        confrontation = "le joueur perd";
        pointordi= pointordi +1
    }
    else if (choix == 'pierre' && choixfait == 'ciseau' ){
        confrontation = "le joueur gagne";
        pointjoueur= pointjoueur +1
        
    }
    else if (choix == 'ciseau' && choixfait == 'feuille' ){
        confrontation = "le joueur gagne";
        pointjoueur= pointjoueur +1
    }
    else if (choix == 'ciseau' && choixfait == 'pierre' ){
        confrontation = "le joueur perd";
        pointordi= pointordi +1
    }
    else if (choix == 'feuille' && choixfait == 'pierre' ){
        confrontation = "le joueur gagne";
        pointjoueur= pointjoueur +1
    }
    else {
        confrontation = "le joueur perd ";
        pointordi= pointordi +1
    }
    var ptsjoueur = document.getElementById( 'pointjoueur' );
    var ptsordi = document.getElementById( 'pointordi' );
    var resultat = document.getElementById('resultat');

    resultat.innerHTML = confrontation;
    ptsjoueur.innerHTML = pointjoueur;
    ptsordi.innerHTML = pointordi;

    
    console.log(confrontation);
}   
function resetForm() {
    location.reload();
}