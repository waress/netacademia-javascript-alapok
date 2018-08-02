// A closer.js-ben a counter globális volt

// Így el lehet rejetni a count változót
var count = 10;

var counter = (function(c){ // másolata lett a count-nak
  return function() {
    console.log(c);
    c++;
  }
})(count);


count = 123;

counter();
counter();
counter();
counter();
counter();

//console.log(count);  // ERROR
