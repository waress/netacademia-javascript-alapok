//function outer() {
//
//  var b = 10;
//  function inner() {
//
//    var a = 20;
//    console.log(b + a);
//  }
//
//  return inner;
//}
//
//var x = outer();
//var y = outer();
//console.log(typeof(x));
//console.log(typeof(y));
//
//console.log(x());
//console.log(x());
//console.log(x());
//
//console.log(y());
//console.log(y());
//
//console.dir(x());


function outer(){

  var b = 10;
  var c = 100;

  function inner() {
    var a = 20;
    console.log('a = ' + a + ', ' + 'b = ' + b);
    a++;
    b++;
  }
  return inner;
}

var x = outer();
var y = outer();

console.log(x());
console.log(x());
console.log(x());

console.log(y());
