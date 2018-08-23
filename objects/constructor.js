function Car (type, color, km){
  this.type = type;
  this.color = color;
  this.km = km;
  this.ride = ride;
}

function ride(JourneyLength){
  this.km += JourneyLength;
}

var audi = new Car('Audi', 'white', 1200);
audi.ride(10);
console.log(audi.km);

var lada = new Car('Lada', 'red', 245000);
lada.ride(100000);
console.log(lada.km);
