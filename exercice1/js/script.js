var nombre_alea_a_trouver =  Math.floor(Math.random() * Math.floor(10));
var liste_essai = [];

function test_nombre_trouver(inputnombre) {
    console.log (inputnombre) ; 
    let resultat = ""
   switch (true) {
       case inputnombre == nombre_alea_a_trouver :
            resultat = "bravo le nombre a été trouver , votre nombre etais le "+ inputnombre ;
            break ;
       case inputnombre > nombre_alea_a_trouver :
            resultat = "le nombre choisi est supérieur au nombre a trouver , votre nombre etais le "+ inputnombre ;
            break ;
       case inputnombre < nombre_alea_a_trouver :
            resultat = "le nombre choisi est inférieur au nombre a trouver , votre nombre etais le " + inputnombre ;
            break ;
   }
   let result = document.getElementById('resultat');
   result.innerHTML = resultat ; 

   liste_essai.push(inputnombre) ;
   let liste =document.getElementById('liste_essai');
   liste.innerHTML = liste_essai;
   



}
