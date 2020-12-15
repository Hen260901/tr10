
let surnom =document.getElementById("surnom");
let pseudo =prompt('Veuillez entrer votre pseudo');
surnom.innerHTML +='Bienvenue<b> ' +  pseudo + ' </b>!';



    let jeux = [];
    let jeuxrestant = 10;
    const MONTANT = "69,99€";







function Acheter(jeu) {

        jeux.push([jeu.jeux.value, jeu.console.value, jeu.langue.value, jeuxrestant, MONTANT]);
        console.log(jeux);

        console.log("commande du jeu " + jeu.jeux.value + " sur  " + jeu.console.value + " en " + jeu.langue.value + " pour le montant de " + MONTANT);
        jeuxrestant--;

        return false;

    }

    function stock() {
        if (jeuxrestant > 0) {
            console.log("Attention il reste " + jeuxrestant + " en stock ");

        } else {
            console.log("Rupture de stock")

        }

    }
var liste = "<ul><li>un</li><li>deux</li><li>trois</li></ul>";

var body = document.querySelector("body");
body.innerHTML = liste;





