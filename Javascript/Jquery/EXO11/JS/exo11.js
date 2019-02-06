var myUsers = [
    // Objets du tableau(key, value)
    {
        img: "https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg", name: "Marie",
        birthday: "1988-10-12"
    },
    {
        img: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name: "Laurent",
        birthday: "1975-01-03"
    },
    {
        img: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image/visual-reverse-image-search-v2_1000x560.jpg",
        name: "Rositta",
        birthday: "1961-03-04"
    },
    {
        img: "https://theadsgroup.com/content/uploads/2012/12/unicorn-wallpaper.jpg",
        name: "Philippine",
        birthday: "1969-01-28"
    }
];


function envoi() {

    var regDateISO = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    var isRegDateISO = regDateISO.test(document.getElementById('date').value); // boolean
    // alert(isRegDateFr);

    if (document.getElementById('prenom').value &&
        isRegDateISO) {

        // Stock les valeurs des champs dans les variables.
        var contenu = document.getElementById('prenom').value;
        var date = document.getElementById('date').value;
        var image = document.getElementById('image').value;

        // Ajoute l'élément dans le tableau en dernière position.
        myUsers.unshift({ img: image, name: contenu, birthday: date });

        console.log(myUsers);

        // Appel de la fonction
        afficherUtilisateurs();

        // // Masquer le formulaire
        // $('#form-add-user').hide();

        // clignotement
        //     for (i = 0; i < 3; i++) {
        //         $('#list_users .card').first().fadeTo('slow', 0.5).fadeIn('slow', 1.0);
        // }
    }
    // pour reference : la meme chose en JS pur
    // document.getElementById('list_users').innerHTML = listUsers;

    else {
        alert("Votre formulaire est mal rempli !!!!");
    }
};

function afficherUtilisateurs() {

    var listUsers = '<div class="row">';
    var defaultImage = "https://demo.phpgang.com/crop-images/demo_files/pool.jpg";
    for (i = 0; i < myUsers.length; i++) {
        // listUsers += '<div class= "col-md-3 mx-auto" style="width: 200px;">' + myUsers[i].name + '<br>' + myUsers[i].birthday + '</div>';

        listUsers += '<div class="card mt-2 ml-2 bg-info text-white" style="width: 16rem;">';
        listUsers += '<img src= "' + (myUsers[i].img || defaultImage) + '" class="card-img-top" height="200" alt="...">';
        listUsers += '<div class="card-body">';
        listUsers += '<h5 class="card-title text-center">' + myUsers[i].name + '</h5>';
        listUsers += '<p class="card-text text-center">' + myUsers[i].birthday + '</p>';
        listUsers += '<a href="#" class="btn btn-outline-light btn-block">Lien</a>';
        listUsers += '</div>';
        listUsers += '</div>';

    };
    // listUsers += "</div>";
    // $('#list_users').html(listUsers);
    // $('#list_users').show();
    // pour reference : la meme chose en JS pur:
    // document.getElementById('list_users').innerHTML = listUsers;
};

afficherUtilisateurs();

// activé la touche entrer du clavier
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        // afficherUtilisateurs();
        event.preventDefault(); //évite d'envoyer le fomulaire non indiqué.
        envoi();
    }
});

// $(function () {
//     $("#add-users-button").click(function () {
//         $("#form-add-user").toggle();
//     });
// });

// $(function () {
//     $("#search-user").on("keyup", function () {
//         var value = $(this).val().toLowerCase();
//         $("#list_users .card").filter(function () {
//             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//         });
//     });
// });

// .indexOf(value) remvoie le numero d’index, ce qui est un peu difficile à comprendre
// en fait c’est car:
// "$(this).text().toLowerCase().indexOf(value) > -1"
// renvoie true ou false, s’il ne trouve pas le texte recherché indexOf retourne - 1, et l’instruction renvoie false, la card de l’utilisateur n’est pas affichée.




        // $("#list_users .card").css('background', 'red');

    // $("#list_users .card").toggle($(this).text().toLowerCase().indexOf(value) > -1)
        // if (matched) { $("#list_users .card .matched").css('background', 'red'); }
                    // var matched = $("#list_users .card").text().toLowerCase().indexOf(value) > -1 // true ou false
            // $("#list_users .card").toggleClass(function () {
            //     $(this).text().toLowerCase().indexOf(value) > -1;
            // }, );


//cours
          /*  //pour stoper un evenement
            //option 1:
            //stopPropagation() ;

            option 2:
            preventDefault () ;

            option 3:
            un mix des 2 :
            return false ;*/

// simuler une action utilisateur
/*Mettre les selecteurs jquery dans des variables permet d'éviter plusiurs appels au DOM,
cela permet aussi de garder une référence, c'est utile par exemple si on fait un appel à
setTimeOut() qui va nous perdre le contexte JS.

var $clientX = $ ('clientX'),
var $clientY = $ ('clientY'),*/

/* Jquery permet de faire des appels ajax (asynchronous javascript & XML)*/
