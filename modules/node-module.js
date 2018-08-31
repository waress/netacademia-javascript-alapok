// A node.js-ben előre definiált (üres) objektum a module.exports:
//console.log('module.exports: ', module.exports, module);
// five
var five = require('five');

console.log(five.spanish());

function add(a, b) {
  return a + b;
}

function multiply(a, b){
  return a * b;
}


// a module egy 'síma' globális változó, amin rajta van az exports objektum
/*
module.exports.add = add; // a module.export egy üres objektum, aminek így tagja lett az add fv
module.exports.multiply = multiply;
*/


// ugyanaz, mint feljebb
module.exports = {
  add: add,
  multiply: multiply
}
