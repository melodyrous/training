
//Initialise the output
function Contact(id,mdp) {
    this.id=id;
    this.mdp=mdp;
}

var lea = new Contact('lea@gmail.com','12345');

//Add the onBlur event listener on the form's pseudo element 
let pseudo = document.getElementById('pseudo');
pseudo.onblur = colorId ;


// The function colorId verify the entry of the pseudo field and colors the background.
function colorId() {
    pseudoVal = pseudo.value;
    var regex = RegExp('.*@.*');
    if (((pseudoVal.length > 4) && regex.test(pseudoVal) )){
        pseudo.style.backgroundColor = "#ADFF2F";
    }else{
        pseudo.style.backgroundColor = "#B22222";
    }
}

//Add on click event listener to the submit button
let submit = document.querySelector('.submit');
submit.addEventListener('click', checkValues(lea));




//Compare the datas
function checkValues(contact) {

    let mdp = document.getElementById('mdp');
    let pseudo = document.getElementById('pseudo');
    let result = document.getElementById('result');

    if (pseudo.value == contact.id) {
        console.log(mdp.value);
        if (contact.mdp == mdp.value) {
            result.textContent = "Entrees correctes";
        }
        else{
            result.textContent = "Mot de passe incorrect";
        }
    } else {
        result.textContent = "Identifiant incorrect";
    }
}
