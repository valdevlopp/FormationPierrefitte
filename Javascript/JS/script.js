// Commmentaire sur une ligne

/**
 * un
 * commentaire
 * sur
 * plusieurs
 * lignes
 */

/**
 * Les variables:
 * Une variable est un container servant à stocker temporaierment une information (ou donnée). En javascript on déclare une variable avec le mot-clé: "var"r suivi du nom de la variable, chaque variable doit avoir un nom unique (également appelée en anglais "identifier").
 * 
 * Le nom d'une variable doit observer qques règles à savoir:
 * 
 * Le nom d'une variable doit commencer par une lettre;
 * 
 * Le nom d'une variable ne peut contenir que des lettres (non accentuées), des chiffres ou des signes "_" et "$".
 * 
 * Le nom d'une variable est sensible à la casse cad que "a" est différent de "A".
 * 
 * Le javascript possède des mots dit "réservés" qu'on ne peut utiliser pour créer une variable (ex: var, alert, ...).
 */

// On déclare une varibale et on lui affecte immédiatment une valeur.
var x = 25;
var X = 100; // Celle-ci est différente de la var "x".

// On déclare plusieurs variables d'un coup 
var nom = "Lemaitre",
    prenom = "Valérie",
    date = "24/05/1983";

// On déclare une variable sans lui affecter de valeur, puis on lui affecte une valeur ensuite (ce n'est pas recommandé de faire ça).

var age; // pas recommandé//
age = 25;

// On délcare une variavle vide à laquelle on affecte une valeur par la suite (recommandé).

var ville = "";
ville = "Pierrefitte";
ville = "paris";




// Le signe égal n'est pas un opérateur d'égalité mais un opérateur d'affectation cad qu'il sert à affecter(ou à assigner) une valeur à une variable et non que la variable est égale à sa valeur.Ainsi on va pouvoir affecter différentes valeurs à une même variable dns le temps.

x = x + 5;

console.log("nos variables sont: " + x + '\n' + X + '\n' + nom + ' ' + prenom + ' ' + date + '\n' + age + '\n' + ville);

/**
 * Les types de (valeurs de) variables.
 * Les types de valeurs vont avoir une influence sur notre code puisqu'on ne stockera pas de la même façon un chiffre ou une chaine de caractères (comme un texte), par exemple dans une variable. Nous ne pourrons pas non plus effectuer les mêmes opérations sur les variables selon le type de valeurs qu'elles stockent.
 */
/** Le type number:
 * Il va représnter tout nombre ou chiffre, qu'il soit positif ou négatif, entier ou à virgule.
 * Pour affecter une valeur de type -number- on utilise ni guillemet, ni apostrophe.
 * Attention: en programmation on utilise des notaions anglo-saxones, ce qui signifie qu'il faut remplacer nos virgules par des points pour els nombres décimaux.
 *  */

var number1 = 25;
var number2 = -15;
var number3 = 1.09;


/**Le type string 
 * Il va représenter les chaines de caractères cad les textes.
 * Pour affecter une chaine de caractère à une variable il faut l'entourer avec des "guillemets" ou 'apostrophes', soit l'un soit l'autre.
*/

var texte = "lorem ipsum";
var desc = 'lorem ipsilum';

/** Cependant, si la valeur stockée contient elle même des apostrphes ou des guillemets il faudra les échapper au moyen d'un antislach(\), pour qu'il ne les prenne pas en compte. */

var dept = "Je suis du \"9.2\""; // Je suis dans des guillemets dons j'echappe le guillemets

var dept = 'Je suis du "9.2"'; // Pas besoin d'échapper les guillemets.

document.write(dept + "<br>");

var dept2 = 'J\'habite dans le 9.2'; // Je suis dans des apostrophes dons j'echappe l'apostrophe

var dept2 = "J'habite dans le 9.2";
document.write(dept2 + "<br>");

/**
 * Le type boolean (booléen)
 * Un booléen en algèbre c'est une valeur binaire (soit 0 ou 1), en programmation un booléen va être soit la valeur true (crai ou 1) soit la valeur false (faux ou 0) pour affecter un booléen à une variable on utilise ni guillemet, ni apostrophe.
 */

var vrai = true;
var faux = false;


/**
 * Les autres types
 * Parmi les autres valeurs possible on peut citer la valeur "null", qui correspond à la non connaissance à priori de la valeur. "undefined", qui correspond au fait de ne pas avoir définit de valeur pour n otre varaible.
 * "NaN" qui signifie "Not a Number" soit n'est pas un nombre.
 */

var n = null,
    u = undefined,
    nn = NaN;

// Notez qu'il est possible de changer le type de valeur d'une variable, la nouvelle écrasera tout simplement l'ancienne.

var tt = 25; //Type number
tt = true; //Type booléen
tt = 1.09; //Type null
tt = "tt"; //Type string

/**
 * Pour tester le type de la valeur on utilise généralement la méthode "typeof()"
 */

alert(typeof (tt)); /* en testant on constatera que c'est notre type string qui s'applique.**/


// Déclarer une variable de manière explicite ou implicite
var maVariable = 'toto';
// "maVariable" est ce qu'on appelle une écriture camel case.

ma_variable = 'toto';
// "ma_variable" est ce qu'on appelle une écriture snake case.

// Afficher une boite de dialogue
alert("Je sert à afficher des données dans une boite de dialogue");

// Afficher dans la console//

console.log("Je sert à afficher des données dans la console");


// Afficher dans le navigateur (page web)
document.write("Je sert à afficher des données dans la page web");

// Demander à l'utilisateur d'entrer une valeur

prompt("Je sert à afficher des données dans une boite de dialogue qui va demander à l'utilisateur de rentrer des données");

// Méthode (ou fonction) parseInt(), la méthode parseInt () renvoie un nombre ou un chiffre entier à partir d'une chaine de caractère (string).

var unChiffre = "12";

document.write(unChiffre + '<br>'); //12

document.write(typeof (unChiffre) + '<br>'); // string

unChiffre = parseInt(unChiffre + '<br>');

document.write(unChiffre + '<br>'); // 12

document.write(typeof (unChiffre) + '<br>'); // number



// Méthode  (ou fonction) 

var nb_en_lettre = "12.22";

document.write(nb_en_lettre + '<br>'); //12

document.write(typeof (nb_en_lettre) + '<br>'); // string

nb_en_lettre = parseFloat(nb_en_lettre + '<br>');

document.write(nb_en_lettre + '<br>'); // 12

document.write(typeof (nb_en_lettre) + '<br>'); // number


// Méthode toString(), qui sert a convertir en chaîne de caractère 

var nb_en_lettre = 258;  //type number donc pas de guilemets

document.write(nb_en_lettre + '<br>');
document.write(typeof (nb_en_lettre) + '<br>');

nb_en_lettre = nb_en_lettre.toString();

document.write(nb_en_lettre + '<br>');
document.write(typeof (nb_en_lettre) + '<br>');

alert("Hello, je me lance depuis le fichier script");


