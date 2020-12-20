"use strict";
<!-- pseudo -->

let surnom =document.getElementById("surnom");
let pseudo =prompt('Veuillez entrer votre pseudo');
surnom.innerHTML +='Bienvenue<b> ' +  pseudo + ' </b>!';
<!-- variable de départ -->

    let jeux = [];
    let jeuxrestant = 20;
    let MONTANT = "";
    let prixTotal =0 ;
    let total =0;

<!-- fonction acheter -->
/**
 * Facheter
 * @param (jeu)paramètre lien avec html
 * @returns {boolean}mets pour false pour raffraichir la page
 */
function acheter(jeu) {

    if (jeu.jeux.value === "NBA 2k20") {
        MONTANT = 59.99;
    }
    if (jeu.jeux.value === "Just Cause 4") {
        MONTANT = 59.99;
    }
    if (jeu.jeux.value === "GTA 5") {
        MONTANT = 59.99;
    }
    if (jeu.jeux.value === "Just Cause 4") {
        MONTANT = 59.99;
    }
    if (jeu.jeux.value === "Final Fantasy XV") {
        MONTANT = 49.99;
    }
    if (jeu.jeux.value === "Just Cause 4") {
        MONTANT = 49.99;
    }
    if (jeu.jeux.value === "NFS Hearth") {
        MONTANT = 59.99;
    }
    if (jeu.jeux.value === "Farcry 5") {
        MONTANT = 59.99;
    }
    if (jeu.jeux.value === "Watch dogs Legion") {
        MONTANT = 69.99;
    }
    if (jeu.jeux.value === "Among Us") {
        MONTANT = 3.99;
    }
    if (jeu.jeux.value === "Red dead Redemption 2") {
        MONTANT = 69.99;
    }
    if (jeu.jeux.value === "Hitman 3") {
        MONTANT = 69.99;
    }
    if (jeu.jeux.value === "AC Vahalla") {
        MONTANT = 69.99;
    }
    if (jeu.jeux.value === "Watch Dogs Legion") {
        MONTANT = 69.99;
    }
    if (jeu.jeux.value === "Cyberpunk2077") {
        MONTANT = 69.99;
    }
    jeux.push([jeu.jeux.value, jeu.console.value, jeu.langue.value, jeuxrestant, MONTANT, jeu.paiement.value]);
    console.log(jeux);


    console.log("commande du jeu " + jeu.jeux.value + " sur  " + jeu.console.value + " en " + jeu.langue.value + " pour le montant de " + MONTANT);
    jeuxrestant--;
   for (let i in jeux){
       prixTotal=jeux[i][4];
    }
   total +=prixTotal;
    document.getElementById("JeuAchetes").innerHTML+="<p><ul>Ça vous feras un total de "+ total.toFixed(2) +"€"+" avec "+jeu.paiement.value;
    let trier =jeux.map(x =>"commande du jeu " + x[0] + ' sur ' + x[1]+" en "+x[2]+" pour le montant de "+x[4]);
    for(let i in trier){
        document.getElementById("triagePrix").innerHTML+=trier[i]+"€<br>";
        console.log(i);
    }
    return false;
    }
<!-- Stock -->
/**
 * ne mets rien en parametres
 * ne retourne rien
 */

    function stock () {
        if (jeuxrestant > 0) {
            console.log("Attention il reste " + jeuxrestant + " en stock ");
            document.getElementById("stock").innerHTML=document.getElementById("stock").innerHTML+"<p>Attention il reste " + jeuxrestant + " en stock</p>";

        } else {
            console.log("Rupture de stock")
            document.getElementById("stock").innerHTML=document.getElementById("stock").innerHTML+"<p>Rupture de stock</p>";

        }

    }
<!-- TRI -->


