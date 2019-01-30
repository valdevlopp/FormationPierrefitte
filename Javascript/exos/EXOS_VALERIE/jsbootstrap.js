var myUsers = [
    { name: "Dupont", firstname: "Marie", birthday: "1988-10-12" },
    { name: "Gomes", firstname: "Laurent", birthday: "1975-01-03" },
    { name: "Lemoult", firstname: "Rositta", birthday: "1961-03-04" },
    { name: "Kaya", firstname: "Philippine", birthday: "1969-01-29" }
];

function bouton() {
    var nom = document.getElementById("inputName").value; // on cré une variable avec un nom(nom), on lui indique avec document qu'il aille prendre l'élément id ("inputName") avec la valeur de celui-ci
    var prénom = document.getElementById("inputFirstname").value;
    var naissance = document.getElementById("inputBirthday").value;
    if ((prénom) && (naissance)) {
        myUsers.push({ name: nom, firstname: prénom, birthday: naissance });
        listUsers += '<div class="card mt-2 ml-2" style="width: 16rem;">'; // j'ai ajouté mt(margin top) et ml (margin left) 
        listUsers += '<img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image/visual-reverse-image-search-v2_1000x560.jpg" class="card-img-top" alt="papillon">';
        listUsers += '<div class="card-body">';
        listUsers += '<h5 class="card-title">' + nom + " " + prénom + '</h5>';
        listUsers += '<p class="card-text">' + naissance + '</p>';
        listUsers += '<a href="#" class="btn btn-primary">Go somewhere</a>';
        listUsers += '</div>';
        listUsers += '</div>';
    } // La méthode push ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
    else {
        alert('le champ est vide');
    }
    console.log(myUsers); // Cette fonctionnalité affiche un message dans la Console Web. Dans les faits, on indique que l'on veut retrouver notre tableau dans la console (F12)



    afficherLesUtilisateurs();
}
// les functions doivent être mis a la suite les unes des
function afficherLesUtilisateurs() {

    document.getElementById('list_user').innerHTML = listUsers; // Ici on indique que js doit prendre l'élément id (<div id="list_user" class="row"> à l'interieur de notre fichier html et l'affecter à (listUsers) de notre fichier js.
    // Sans cette instruction les cartes ne s'affichent pas dans la page de notre navigateur.
}

var listUsers = '<div class="row">';  // On appelle la div class row qui est notre div ouvrante. // Pour créer une boucle il est obligatoire de créer une variable.
for (i = 0; i < myUsers.length; i++) { //La boucle est créée afin que le js lise la liste du haut en bas.

    // La boucle s'ouvre avec (for). On lui définit plusieurs instrucitons: 
    // 1- i=0 ce qui signifit que i est égal à zéro et que le tableau commence à 0 soit à Marie,
    // 2- puis on indique que: i(0) est inférieur à myUsers(mon tableau) à qui on ajoute la propriété longueur(length).
    //La propriété length(longueur) est un entier non - signé de 32 bits qui indique le nombre d'éléments présents dans le tableau. Elle est toujours supérieure au plus grand indice du tableau.
    // 3- on indique que i(0) doit monter de 1 en un avec les deux ++


    // Ceci est un exemple pour afficher la liste des noms qui se trouve à l'intérieur du tableau. Cette liste va s'afficher simple et sans carte.

    // listUsers += '<div class = "col-md-3">' + myUsers[i].name + '<br>' + myUsers[i].firstname + '<br>' + myUsers[i].birthday + '</div>';
    // Dans cette instruction, on indique la variable (listusers) créé pour la boucle et on ajoute à la suite de la variable(+=) une div dans le fichier JS ('<div class = "col-md-3">') que l'on met toujours entre apostrophe.
    // Puis on ajoute (+) myUsers qui est mon tableau qui commence à zéro ([i]) et on lui dit de prendre(.) le libellé (name) qui est le libellé de mes noms
    // on ajoute un (br) pour un retour ligne
    // on continue d'ajouter tous nos libellés de la même façon
    // on ferme la div ('</div>')

    // Puis on ajoute notre code pour nos cartes directeent dans le js comme ceci:
    // <div class="card" style="width: 18rem;">
    //<img src="..." class="card-img-top" alt="...">
    //<div class="card-body">
    //  <h5 class="card-title">Card title</h5>
    // <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    // <a href="#" class="btn btn-primar// y">Go somewhere</a>
    // </div>
    //</div>

    // A ce code on ajoute à chaque ligne la variable (listusers) puis le sigle (+=) puisqu'on lui ajoute à cette variable le code de la carte. 


    listUsers += '<div class="card mt-2 ml-2" style="width: 16rem;">'; // j'ai ajouté mt(margin top) et ml (margin left) 
    listUsers += '<img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image/visual-reverse-image-search-v2_1000x560.jpg" class="card-img-top" alt="papillon">';
    listUsers += '<div class="card-body">';
    listUsers += '<h5 class="card-title">' + myUsers[i].name + " " + myUsers[i].firstname + '</h5>';
    listUsers += '<p class="card-text">' + myUsers[i].birthday + '</p>';
    listUsers += '<a href="#" class="btn btn-primary">Go somewhere</a>';
    listUsers += '</div>';
    listUsers += '</div>';
}

listUsers += '</div>';
afficherLesUtilisateurs();

document.addEventListener('keydown', function (e) {
    if ((e.which == 13) || (e.keyCode == 13)) {
        e.preventDefault();
        bouton();
    }
});

