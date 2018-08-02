//Egy számot és szöveget adunk meg, a szám azt adja meg, hogy a szöveg hányszor jelenjen meg.

function textMultiply(number, text){
  var output = '';
  for(var i = 0; i < number; i++){
    output += text + ' ';
  }
  return output;
}

console.log(textMultiply(3, 'kutya'));
