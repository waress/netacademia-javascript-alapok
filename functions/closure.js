

// lexikális function scope

var outer = 1;

console.log(outer);

if(true) {
  var innerIf = 1;
}

console.log(innerIf);  // 1


function func() {
  var innerFunc = 'inner function';
  console.log(innerFunc);
}

func();
console.log(innerFunc);  // error
