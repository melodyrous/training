
let colorSubmit = document.querySelector('.colorSubmit');
let numSubmit = document.querySelector('.numSubmit');

document.querySelector('.q2').style.display = 'none';

colorSubmit.addEventListener('click', checkColor);
numSubmit.addEventListener('click', checkNumber);

function checkColor() {
    let color = document.querySelector('.color').value;
    let result1 = document.querySelector('.result1');
    color = color.toLowerCase();
    console.log(color);
    if (color == "blanc") {
        result1.innerHTML = "WOW! Une autre!"
        document.querySelector('.q2').style.display = 'block'
    } else {
        var p = document.createElement('p');
        p.innerHTML = 'Essai encore... ';
        result1.appendChild(p);
    }
}

function checkNumber() {
    let num = document.querySelector('.num').value;
    let result2 = document.querySelector('.result2');
    if (num == 7) {
        result2.innerHTML = "Trop Fort!"
    } else {
        result2.innerHTML = "Essai encore"
    }

}