

let submit = document.querySelector('.nameSubmit');

submit.addEventListener("click", checkName);

// Verifie que le nom comporte entre 1 et 10 caracteres et n'est pas nul
function checkName() {
    let name = document.querySelector('.nameField').value;
    let texte = document.querySelector('.texte');
    
    if ((name.length == 0) || (name.length > 10) ) {
        window.alert("Saisie incorrecte");
    } else {
        console.log(name);
        texte.innerHTML = '';
        var h2 = document.createElement("h2");
        h2.innerHTML = "Bonjour " + name;
        texte.appendChild(h2);
       }
}


