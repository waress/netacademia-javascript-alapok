// Így ajánlatos objektumokat létrehozni js-ben, így lehet 'privát' változókat létrehozni (clouser)

/*function carFactory() {
  return {
    color: 'purple',
    type: 'skoda'
  };
}

var skoda = carFactory();
console.log(skoda);*/





// Továbbfejlesztve a felső példát

/*function carFactory(type, color) {
  return {
    color: color,
    type: type
  };
}

var skoda = carFactory('Skoda', 'red');
console.log(skoda);*/




// Most 'rejtjük' el a km változót


function carFactory(type, color, km) {
  var km = km;

  function getKm(){
    return km;
  }

  function ride(journeyLength){
    km += journeyLength;
  }

  return {
    color: color,
    type: type,
    getKm: getKm,
    ride: ride
  };
}

var skoda = carFactory('Skoda', 'red', 51000);
console.log(skoda.km);
skoda.ride(30);
console.log(skoda.getKm());

var lada = carFactory('Lada', 'white', 180000);
console.log(lada.getKm());
