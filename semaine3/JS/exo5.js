var note = 0;

for (var i = 0 ; i<10  ; i++ ) {
    var newNote = prompt('Saisir note n°'+ (i+1));
    note += parseInt(newNote, 10);
}

var moyenne = note/10;
alert('La moyenne est de '+ moyenne.toString());