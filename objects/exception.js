/*

var number = 0;

if(number === 0) {
  throw 'Divided by zero';
}

console.log(5 / number);

*/





/*

var num = 0;

try {
  if(num === 0) {
    throw new Error('Divided by 0');
  }
} catch (e) {  // e értéke az amit a throw után írunk
  console.log(e.stack);
  num = 1;
}

console.log(5 / num);

*/



var num = 0;

try {
  checkNum();
} catch (e) {  // e értéke az amit a throw után írunk
  console.log(e.stack);
  num = 1;
}

console.log(5 / num);

function checkNum() {
  if(num === 0) {
    throw new Error('Divided by 0');
  }
}
