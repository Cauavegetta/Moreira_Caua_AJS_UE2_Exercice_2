"use strict";


document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault();

    let mot = document.getElementById("mot").value;
    let erreurs = "";

    if (mot.length < 8) {
        erreurs += "8 caracteres minimum<br>";
    }

    if (!/[A-Z]/.test(mot)) {
        erreurs += "Il manque une majuscule<br>";
    }

    if (!/[a-z]/.test(mot)) {
        erreurs += "Il manque une minuscule<br>";
    }

    if (!/[0-9]/.test(mot)) {
        erreurs += "Il manque un chiffre<br>";
    }

    if (!/[!@#$%^&*]/.test(mot)) {
        erreurs += "Il manque un caractere special<br>";
    }

    if (erreurs == "") {
        document.getElementById("resultat").innerHTML = "Mot de passe valide";
    } else {
        document.getElementById("resultat").innerHTML = erreurs;
    }
});
