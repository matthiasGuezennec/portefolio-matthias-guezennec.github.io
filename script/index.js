"use strict";

//console.log("test");
let idAffiche = undefined;

function affichePizzeria() {

    let section = document.getElementById('cacheSection1');

    if (section == null) {

        document.getElementById('afficheSection').id = "cacheSection1";
        idAffiche = undefined;
    } else {

        // on retire l'ancien projet affiche
        let valAffiche = document.getElementById('afficheSection');
        if (valAffiche != null) {
            valAffiche.id = idAffiche;
        }
        idAffiche = section.id;

        // affichage de la section caché correspondante
        section.id = "afficheSection";
    }
}

function afficheMathe() {

    let section = document.getElementById('cacheSection2');

    if (section == null) {

        document.getElementById('afficheSection').id = "cacheSection2";
        idAffiche = undefined;
    } else {

        // on retire l'ancien projet affiche
        let valAffiche = document.getElementById('afficheSection');
        if (valAffiche != null) {
            valAffiche.id = idAffiche;
        }
        idAffiche = section.id;

        // affichage de la section caché correspondante
        section.id = "afficheSection";
    }
}

function afficheCarbone() {

    let section = document.getElementById('cacheSection3');

    if (section == null) {

        document.getElementById('afficheSection').id = "cacheSection3";
        idAffiche = undefined;
    } else {

        // on retire l'ancien projet affiche
        let valAffiche = document.getElementById('afficheSection');
        if (valAffiche != null) {
            valAffiche.id = idAffiche;
        }
        idAffiche = section.id;

        // affichage de la section caché correspondante
        section.id = "afficheSection";
    }
}