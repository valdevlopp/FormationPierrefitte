
var majorite = 18;
var age = Number(prompt("Quel est votre âge ?"));

if (age >= majorite) {
    alert("Bienvenue sur le site");
    document.write("Vous êtes majeur !");
}
else {
    alert("Libère la chaine, t'es pas majeur");
    document.location.href = "https://google.com"
}

