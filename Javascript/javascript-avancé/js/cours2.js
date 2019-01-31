// function afficheAge(nom, annee) {
//     var age;
//     age = 2019 - annee;
//     console.log(nom + " a " + age + " an(s)");
// }

// afficheAge("Bob", 2000);
// afficheAge("Rosita", 1980);
// afficheAge("Rosita2", 1999);



// function calcMoy(nb1, nb2) {
//     var moy;
//     moy = (nb1 + nb2) / 2;
//     return moy; //return te renvoi le résultat de ma variable,         équivaut au résultat de ma variable 

// }
// var m1, m2;
// m1 = calcMoy(1000, 2000); //valeur de nb1 + nb2 /2 (1000 + 2000 = 3000 / 2 = 1500)
// m2 = calcMoy(3455, 2); // valeur de m2: 3455+2/2 (3455 + 2 = 3457 /2 = 1728.5)
// alert(m1 + ' / ' + m2); //m1= le calcul de moy (nb1 + nb2 /2)
// // m2= le même calcul


// LA PORTEE DES VARIABLES:
// les variables (locales) déclarées dans une fonction sont locales à la fonction.
// Les variables (globales) déclarées dans le script sont visibles dans tout le script.

// ATTENTION aux écrasements liés aux doubles déclarations : globales et locales.

// On peut dire que javascript est un langage fonctionnel.

// EVENTS (Les évènements)

// Plusieurs types d'Event: Celui-ci est très important par exemple. Ils sont tous disponibles sur (https://developer.mozilla.org/en-US/docs/Web/Events)
// L' DOMContentLoaded événement se déclenche lorsque le document HTML initial a été complètement chargé et analysé, sans attendre que les feuilles de style, les images et les sous-images aient fini de se charger.

// Un événement différent load, ne doit être utilisé que pour détecter une page entièrement chargée.C'est une erreur très courante d'utiliser loadoù DOMContentLoadedserait beaucoup plus approprié, alors soyez prudent.

// Fonction avec 1 ou plusieurs param

//definir des fonctions:
// function calc(a, b) {
// }

//recup des id dans le doc html:
// var but = document.getElementById("butld");

// // Exemple de la balise html correspondante:
// <input type="text" class="form-control" id="inputFirstname" placeholder="Mon nom" required></input>
// // Exemple des instructions Javascript correspondantes:
// var prénom = document.getElementById("inputFirstname").value;

// // Exemple de la balise html correspondante:
// <div id="list_user" class="row"></div>
// // Exemple des instructions Javascript correspondantes:
// document.getElementById('list_user').innerHTML = listUsers;


// //Association des évenements avec addEventListener:
// but.addEventListener("click", function () { calc(5, 6); });

//exemple:
// document.addEventListener('keydown', function (e) {
//     if ((e.which == 13) || (e.keyCode == 13)) {
//         e.preventDefault();
//         bouton();
//     }
// });





var nomF = document.getElementById('nom');
nomF.addEventListener('change', function () {
    if (nomF.value.length <= 3) {

        nomF.style.backgroundColor = "red";
    }

    else {
        nomF.style.backgroundColor = "green";
    }
});


document.addEventListener('click', function (e) {
    console.log("La source de l'événement est / " + e.target)
});
// (e) ceci est le paramètre de ma fonction et target est l'élément qui va lui permettre de fonctionner.