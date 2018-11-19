let keyboard = document.getElementById('keyboard');
let scr = document.getElementById('screen').querySelector('p');

var nbr1 ='0' ;
var nbr2 = '0';
var result = 0;
var ope = null;
var opeActivated = false;
var newNumber = true;

keyboard.addEventListener("click", function(e){
    action(e);
});

function action(e) {

    var button = e.target;
    var buttonClass = button.className.trim();
    var buttonVal = button.textContent;

    switch (buttonClass) {
        case "col num": 
            if (newNumber) {
                scr.innerHTML = buttonVal
                nbr2 = buttonVal;
                 newNumber = false;
            } else {
                scr.innerHTML+= buttonVal;
                nbr2 += buttonVal;
            }
            break;
        case "col ope":
            if ( opeActivated ) {
                result =  getResult( nbr1,nbr2 ,ope).toString();
                scr.innerHTML = result;
                nbr1 = result;
                nbr2 = '';
                ope = buttonVal;
                newNumber= true;
            } else {
                ope = buttonVal;
                opeActivated = true;
                nbr1 = nbr2;
                newNumber = true;
            }
            break;
        case "col result":
            result = getResult( nbr1,nbr2 ,ope);
            scr.innerHTML = result.toString();
            break;

        case "col comma":
            scr.innerHTML += ".";
            nbr2 += ".";
        default:
            break;
    }


}

function getResult(num1,num2, ope){
    console.log(num1 , num2 , ope);
    num1 = parseFloat(num1, 10);
    num2 = parseFloat(num2, 10);
    ope = ope.trim();
    var rep = null;
    switch (ope) {
        case '+':
            rep = num1 + num2 ;
            break;
        case '-': 
            rep = num1 - num2 ;
            break;
        case '*':
            rep = num1 * num2;
            break;
        case '/':
            rep = num1 / num2;
            break;
        default:
            rep = 'erreur';
            break;
    }
    console.log(rep);
    return rep;
  
}

//si aucune ope est selectionne, remplace la valeur par l'ope est place opeActivated a true.
//si une operation est deja selectionne, calcule l'ancienne operation, affiche son resultat et remplace la valeur affiche dans l'ecran.