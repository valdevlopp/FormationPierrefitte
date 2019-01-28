var heure = Number(prompt("Quelle heure est-il ?"));
if (heure < 12) {
    alert("C'est le matin");
}

else if (heure === 12) {
    alert("C'est le midi !");
}

else if (heure <= 18) {
    alert("C'est l'après-midi !");
}

else {
    alert("C'est le soir");
}
