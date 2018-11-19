function maxEtMin(chaine){
    let nombres = chaine.split(' ').map(Number);
    let max = Math.max(...nombres);
    let min = Math.min(...nombres);
    console.log(max+" "+min);
  }
  
  maxEtMin('1 2 3 4')
  maxEtMin('-1 5 -3 0')

  //Cette fonction compare le premier et le dernier index sur lequel est trouve la valeur
//Si il est egal, elle retourne la valeur
function testUniq(value, index,self ){
    return self.indexOf(value)==self.lastIndexOf(value);
  }
  
  function findUniqNumber(liste){
    rep = liste.filter(testUniq);
    return rep[0];
  }
  
  console.log(findUniqNumber([ 1, 1, 1, 2, 1, 1 ])===2);
  console.log( findUniqNumber([ 0, 0, 0.55, 0, 0 ]) === 0.55);
  console.log(findUniqNumber([ 1, 3, 1, 2, 3, 1 ]) === 2);

  //Cette fonction retourne le ou les caracteres du millieu d'une chaine de caractere.
  function getMiddle(input_text){
    var rep = "";
    var input_size = input_text.length;
    var mid = Math.floor(input_size/2);
    if( input_size%2 ===0){
      rep = input_text[mid-1] + input_text[mid];
    }
    else{
      rep = input_text[mid];
    }
    return rep;
  }
  
  console.log(getMiddle("test")=="es");
  console.log(getMiddle("testing") ==="t");
  console.log(getMiddle("middle")==="dd");
  console.log(getMiddle("A")==="A");