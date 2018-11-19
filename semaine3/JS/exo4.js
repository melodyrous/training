
play();

function play(){
    var operation = getRandomOperation();
    var num1 = getRandom();
    var num2 = getRandom();
    var question = "Combien font "+ num1.toString() + operation + num2.toString() + '?';
    var result = getResult(num1,num2,operation);
    console.log(operation);

    var answer = prompt(question);
    if (answer == result.toString()) {
        alert('Bravo!')
    }else {
        alert('Dommage! Le resultat est '+ result.toString() );
    }

}

//This function return a random number in a range of [0;13[
function getRandom(){
    return Math.floor(Math.random() * Math.floor(13))
}

//This function returns an operation's sign
function getRandomOperation(){
    var operationTab = ['+','-','*'];
    i =  Math.floor(Math.random() * Math.floor(3));
    return operationTab[i];
}

function getResult(num1,num2, ope){
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
        default:
            break;
    }
    return rep;
}

