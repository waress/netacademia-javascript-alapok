//fv-ek elsőrenű lakosok
//változóba lehet tenni a fv-eket

//var osszead = function add(a, b) {
//  return a + b;
//}

// ----  vagy ----
//function add(a, b){
//  return a + b;
//}
//
//var osszead = add;


//function hello(){...}  teljesen egyenértékű var hello = function(){...}



// ---- vagy ----
var osszead = function(a, b) {
  return a + b;
}
console.log(osszead(1, 2));  // 3

function addText(text1, text2, addFn){
  return addFn(text1, text2);
}

console.log(addText('alma', 'fa',osszead));

// osszead helyén egy fv
console.log(addText('alma', 'fa', function(a, b) {
  return a + b;
}));






var array = [1, 7, 9, 10];

array.forEach(function(elem, index, arr) {
  console.log(index, elem, arr);
})



array.forEach(console.log);


