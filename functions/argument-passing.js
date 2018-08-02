//primitívekkel érték szerinti átadás

var outerNumber = 1;

function incrementNumber(number){
  number++;
  console.log(number, ' függvényben');
}


incrementNumber(outerNumber);
console.log(outerNumber, ' függvényen kívül');


//objektummal - hivatkozás (cím) szerinti átadás

var outerObject = {
  number: 1
}

function incrementObject(obj) {
  obj.number++;
  console.log(obj.number, ' függvényben')
}

incrementObject(outerObject);
console.log(outerObject.number, ' függvényen kívül');


//tömböknél is cím szerinti átadás


var outerArray = [1];

function incrementArray(array) {
  array[0]++;
  console.log(array[0], ' függvényben')
}

incrementArray(outerArray);
console.log(outerArray[0], ' függvényen kívül');
