var myUsers = [
    { name: "Marie", birthday: "1988-10-12" },
    { name: "Laurent", birthday: "1975-01-03" },
    { name: "Rositta", birthday: "1961-03-04" },
    { name: "Philippine", birthday: "1969-01-29" }
];

function bouton() {
    var nom = prompt("Entrez votre nom");
    var naissance = prompt("Entrez votre date de naissance");
    myUsers.push({ name: nom, birthday: naissance });
    console.log(myUsers);
}



