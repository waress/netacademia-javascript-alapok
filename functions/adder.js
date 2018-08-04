function add3(number) {
  return number + 3;
}

console.log(add3(8));



// Szebb megoldás, összeadó fv-eket fog generálni

function generateAdder(baseNumber) {
  return function(number) {
    return number + (baseNumber * 2);
  }
}

var newAdder3 = generateAdder(3); // newAdder3 = function(number) { return number + 6 };
var newAdder5 = generateAdder(5);
console.dir(newAdder3(5)); // végrehajtja, number = 5 -> 6+5 = 11 lesz
console.dir(newAdder5(5));
console.dir(newAdder5(5));
