var roman = require('./num2roman');

console.log(roman() === '', 'function exists');
console.log(roman(1) === 'I', '1 -> I');
console.log(roman(2) === 'II', '2 -> II');
console.log(roman(3) === 'III', '3 -> III');
console.log(roman(5) === 'V', '5 -> V');
console.log(roman(4) === 'IV', '4 -> IV');
