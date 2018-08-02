var number = 12;

(function(n){
  var a = 'alma';
  n++;
  console.log(a + ' ' + n);
})(number) // () kvázi azt jelent: meghívom

console.log(number);


var a = (function(){  // (function...) -> zárójeles kifejezés, amiben fv van, a fv almával tér vissza, átadja az a-nak
  return 'alma';
})();  // () -> rögtön meghívom

console.log(a);  // alma



//tömb, elemei egy-egy fv, ahanyadik a sorban, azt a számot írja ki a fv

var arr = [];

for(var i = 0; i < 5; i++) {
  arr[i] = function() {
    console.log(i);
  }
}

arr[0](); // 5, azért mert
