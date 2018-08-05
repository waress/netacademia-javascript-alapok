//var car = {
//  type: 'Skoda',
//  color: 'red',
//  km: 1000,
//  ride: function(rideLength) {
//    this.km += rideLength;
//  }
//};
//
//car.ride(60);
//console.log(car.km);

var car = {
  type: 'Skoda',
  color: 'red',
  km: 1000,
  ride: ride
};

function ride(rideLength) {
  this.km += rideLength;
  console.log(this);
}

car.ride(60);
ride();
console.log(car.km);

