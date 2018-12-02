function expandedForm(n){
    var N = n.toString();
    var dizaine = Math.pow( 10 ,(N.length-1));
    var expandedForm = "";
    expandedForm += N[0]+"*"+dizaine+" ";
    for (var i=1 ;i<N.length;i++ ) {
        dizaine = dizaine/10;
        expandedForm += "+ "+N[i]+"*"+dizaine+" ";
    }
    console.log(expandedForm);
}

expandedForm(156);

function getAgeRespectif(humanYears){
    humanYearsDep = humanYears;
    catYears = 0;
    dogYears= 0 ;
    if(humanYears>=1){
        catYears += 15;
        dogYears += 15;
        humanYears -= 1;
        if(humanYears>=1){
            catYears += 9;
            dogYears += 9;
            humanYears -=1;
            if(humanYears!=0){
                catYears += humanYears*4;
                dogYears += humanYears*5;
            }
        }
    }
    return [humanYearsDep, catYears, dogYears];
}

console.log(getAgeRespectif(1));
console.log(getAgeRespectif(2));
console.log(getAgeRespectif(3));

function forHowLongIOwnedTheseTwo(Kitten, Putty){
    ownedCat = 0;
    ownedDog = 0;
    if(Kitten>=15){
        ownedCat += 1;
        Kitten -= 15;
        if(Kitten >= 9){
            ownedCat += 1;
            Kitten -= 9;
            if(Kitten!=0){
                ownedCat += Math.round(Kitten/4);
            }
        }
    }
    if(Putty>=15){
        ownedDog += 1;
        Putty -=15;
        if(Putty>=9){
            ownedDog +=1;
            Putty-=9;
            if(Putty!=0){
                ownedDog += Math.round(Putty/5);
            }
        }
    }
    return [ownedCat,ownedDog];
}

console.log(forHowLongIOwnedTheseTwo(65,82));
console.log(forHowLongIOwnedTheseTwo(15,15));
console.log(forHowLongIOwnedTheseTwo(24,24));
console.log(forHowLongIOwnedTheseTwo(29,30));


