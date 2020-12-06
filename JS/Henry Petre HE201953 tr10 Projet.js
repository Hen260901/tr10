"use strict";
var jeux =[];
let jeuxrestant =10;
const MONTANT ="69,99€";


function acheter(jeu){

    jeux.push ([jeu.jeux.value, jeu.console.value, jeu.langue.value, jeuxrestant, MONTANT]);
    console.log(jeux);

    console.log("commande du jeu " + jeu.jeux.value + " sur  " + jeu.console.value + " dans la langue " +  jeu.langue.value + " pour le montant de " + MONTANT);
    jeuxrestant--;
    return false;

}
function stock(){
    if (jeuxrestant > 0){
        console.log("Attention il reste " + jeuxrestant + " en stock ") ;
    }
    else{
        console.log("Rupture de stock")
    }

}




