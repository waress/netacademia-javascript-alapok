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
  arr[i] = (function(i) { // i itt egy másolat már
    return function() {
      console.log(i);
    };
  })(i)
}

arr[0]();
arr[1]();
arr[2]();
arr[3]();
arr[4]();



var arr2 = [];

[0, 1, 2, 3, 4].forEach(function(e){
  arr2[e] = function() {
    console.log(e);
  };
});

arr2[0]();
arr2[1]();
arr2[2]();
arr2[3]();
arr2[4]();





var arr3 = [0, 1, 2, 3, 4].map(function(e){
  return function() {
    console.log(e);
  };
});

arr3[0]();
arr3[1]();
arr3[2]();
arr3[3]();
arr3[4]();






