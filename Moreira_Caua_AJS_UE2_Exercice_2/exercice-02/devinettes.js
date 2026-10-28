"use strict";

let secret;
let restant;
let minimum;
let maximum;
let termine = false;

function recommencer() {


    secret = undefined;
    restant = undefined;
    termine = false;



    document.getElementById("min").disabled = false;
    document.getElementById("max").disabled = false;
    document.getElementById("essais").disabled = false;
    document.getElementById("nombre").value = "";
    document.getElementById("resultat").innerText = "Nouvelle partie";


}

document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault();



    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let essais = Number(document.getElementById("essais").value);
    let nombre = Number(document.getElementById("nombre").value);

    
    if (termine) {
        document.getElementById("resultat").innerText = "Clique sur recommencer";
        return;
    }

    if (document.getElementById("min").value == "" ||
        document.getElementById("max").value == "" ||
        document.getElementById("essais").value == "" ||
        document.getElementById("nombre").value == "" ||
        !Number.isInteger(min) || !Number.isInteger(max) ||
        !Number.isInteger(essais) || !Number.isInteger(nombre) ||
        min >= max || essais < 1 || nombre < min || nombre > max) {
        document.getElementById("resultat").innerText = "Verifie les nombres";
        return;
    }

    if (secret === undefined) {
        minimum = min;
        maximum = max;
        restant = essais;
        secret = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

        document.getElementById("min").disabled = true;
        document.getElementById("max").disabled = true;
        document.getElementById("essais").disabled = true;
    }

    restant--;

    if (nombre == secret) {
        document.getElementById("resultat").innerText = "Bravo, gagne !";
        termine = true;
    } else if (restant == 0) {
        document.getElementById("resultat").innerText = "Perdu. Nombre : " + secret;
        termine = true;
    } else if (nombre < secret) {
        document.getElementById("resultat").innerText = "Plus grand. Essais : " + restant;
    } else {
        document.getElementById("resultat").innerText = "Plus petit. Essais : " + restant;
    }
});
