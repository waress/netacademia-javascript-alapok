var car = {
  type: 'fiat',
  km: 123
};

console.log(car.type);

var km = 100;

// lassú, ne használjuk!
with(car) {
  console.log(km);
}
