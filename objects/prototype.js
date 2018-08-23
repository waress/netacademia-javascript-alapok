function Animal(w) {
  this.weight = w;
}

var proto = { height: 1 };
proto.height = 2;

Animal.prototype = proto;

var dog = new Animal(40);
console.log(dog.weight);
console.log(dog.height);


function Car (type, color, km) {
  this.type = type;
  this.color = color;
  this.km = km;
}

Car.prototype.ride = function (journeyLength) {
  this.km += journeyLength;
}

var skoda = new Car('Skoda', 'blue', 100000);
skoda.ride(2000);
console.log(skoda.km);
console.log(skoda);
