var nb1 = 123, nb2 = "123";
/**
 * L'opérateur de comparaison "==" signifie l'égalité en valeur
 */
document.write(nb1 == nb2); // Retourne true
/**
* L'opérateur de comparaison "===" signifie l'égalité en type et valeur
*/
document.write(nb1 === nb2); // Retourne false
/**
 * L'opérateur de comparaison "!=" signifie l'inégalité en valeur
 * Différent de..
 */
document.write(nb1 != nb2); // Retourne false
/**
* L'opérateur de comparaison "!==" signifie l'inégalité en type et valeur
Strictement différent de...
*/
document.write(nb1 !== nb2); // Retourne true


/**
 * EXERCICE :
 * J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
 * Je doit saisir mon prénom et mon age pour être authentifié sur
 * le site (les infos sont en BDD, ici dans mes variables prenom
 * et age).
 * En cas d'échec une alerte m'informe du problème.
 * Si tout se passe bien, un message de bienvenue m'accueille.
 */

 // On defini le prénom et l'age par défaut.
var prenom = "Mehdi",
    monAge = 26,
    prenomLogin = prompt("Quel est votre prenom ?");// Récupère et stocke dans la variable prenomLogin le nom entré par l'utilisateur.

// Je vérifie que le nom entré coresspond au prenom par défaut stocké dans la variable prenom
if (prenomLogin === prenom) {
    // Si le prénom entré par l'utilisateur coresspond au prénom par défaut on défini une variable age qui va récupérer et stocker l'âge entré par l'utilisateur
    var age = Number(prompt("Quel est votre âge ?"));

    // Si l'âge entré par l'utilisateur corespond à l'âge par défaut stocker dans la variable monAge
    if (age === monAge){
        // Renvoi une alerte de bienvenue
        alert("Bienvenue M. " + prenomLogin);
    } else {
        // Sinon, on renvoi une alerte de refus
        alert("Âge invalide !");
    }
} else{
    // Sinon on renvoi une alerte de refus
    alert("Prénom invalide");
}
