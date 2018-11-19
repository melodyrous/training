var min = 0;
var max = 9 ;

var nombre = getRandom(min, max);
var win = false;
var compteur = 0;



function play() {
    while ((compteur < 3)&&(!win)) {
        var choix = prompt('Choisissez un nombre entre '+ min + ' et '+ max +':');
        compare(choix);
    }
    if (!win){
        alert('Vous avez perdu');
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random()*(max-min + 1))+min ;
}

function compare(choix) {
    var answer = 'Le nombre cherche est plus ';
    if (choix < nombre) {
        answer += 'grand.';
        compteur ++;
    } else if ( choix > nombre) {
        answer += 'petit.';
        compteur ++;
    }else{
        answer = 'Bravo !'
        win = true;
    }
    alert(answer);
    return win;
}

play();