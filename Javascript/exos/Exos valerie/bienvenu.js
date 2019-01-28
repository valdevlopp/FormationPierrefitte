var monPrenom = "Valérie";
var monLogin = "lemaitre.valerie@lepoles.fr";
var monPass = "mimi2555654";
var prenom = prompt("Entrez votre prénom !");


if (prenom === monPrenom) {
    var login = prompt("Entrez votre adresse mail");

    if (monLogin === login) {
        var passWord = prompt("Entrez votre mot de passe");

        if (passWord === monPass) {
            alert("Bienvenu dans le site");
        }
        else {
            alert("Mot de passe non valide");
        }
    }
    else {
        alert("login non valide !");
    }
}
else {
    alert("prénom non valide !");
}
