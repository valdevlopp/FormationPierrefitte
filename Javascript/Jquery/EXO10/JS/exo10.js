// Jquery s'utilise en local ou en ligne

// la valeur jquery c'est le $

// Ceci est la manière de base pour appeler une fonction dans le jquery:
//Litérèrement: Dès que le document est prêt 
//($ document) return tout le document / la ligne d'en dessous signifie que jquery($) va chercher ma class (madivselect) et ajoute (addclass=parametre établit par jquery pour l'ajout d'une classe) ma class highlighted.
// $(document).ready(function () {
//     $('.maDivSelect').addClass('highlighted');
// });
// //La syntaxe de jquery est inspirée du css et on retrouve les sélecteurs css dans le jquery
// //comme: 
// $(document).ready(function () {
//     $('#selected-div > li').addClass('horizontal');
//     $('#selected-div li:not(.horizontal)').addClass('sub-level');
// });

// On lui indique qu'il sélectionne l'id (#selected-div) auquel il ajoute une class nommée horizontal
// div (>) li (on indique qu'il sélectionne (li) qui est l'enfant de la div parce qu'on a créé une div, mais ca peut être une li comme dans l'exemple ci-dessous, le signe plus grand que, lui dit de prendre en descendant).
// Il prend les (li) descendants directs de la div, à la deuxième ligne il selectionne toutes les class qui ne sont pas appelé horizontal et il leur ajoute une class sub-level.

$(document).ready(function () {
    $('#selected-el > li').addClass('horizontal');
    $('#selected-el li:not(.horizontal)').addClass('sub-level');
    $('#selected-el .sub-level:nth-child(odd)').addClass('alt');
    //on lui indique de selectionner tous les éléments pairs (even)
    // (odd) séléctionne les impairs (voir l'exemple et essayer les deux)
});

//Selectionne les li descendant direct de ul et ceux à l'intérieur des li (petits-enfants) il les nomme sub-level.

$(document).ready(function () { });
$(function () { }); //s'utilise a la place de $(document).ready celle ci-dessus

// Masquer toutes les lignes de table impaires dans une table:
// $("tr: odd").hide();


// Lorsque le pointeur de la souris entre dans un élément < p > le masquer:
// $("p").mouseenter(function () {
//         $(this).hide();
//     });


// Si vous appuyez sur une touche du clavier à l'intérieur d'un élément < input > pour la masquer:
// $("input").keypress(function () {
//         $(this).hide();
//     });

// Si vous appuyez sur une touche du clavier à l'intérieur d'un élément <input>, il convient de la masquer:
// $("p").on("click", function () {
//         $(this).hide();
//     });


// Utilisez une méthode jQuery pour masquer un élément < p > lorsque vous cliquez dessus.
// $("p").click(function () {
//     $(this).hide();
// });

