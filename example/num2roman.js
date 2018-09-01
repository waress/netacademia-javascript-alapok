'use strict'

/*function roman(arabic){
  if (arabic === 1) {
    return 'I';
  } else if(arabic === 2){
    return 'II';
  } else if(arabic === 3){
    return 'III';
  }
  return '';
}*/


//Elegánsabb megoldás

/*
function roman(arabic) {
  var output = '';
  for(var i = 0; i < arabic; i++){
    output += 'I';
  }
  return output;
}
*/


//Rekurzióval
/*function roman(arabic) {
  if(!arabic){
    return '';
  }
  var currentRoman, currentArabic;
  if(arabic === 5) {
    currentRoman = 'V';
    currentArabic = 5;
  } else {
    currentRoman = 'I';
    currentArabic = 1;
  }
  return roman(arabic - currentArabic) + currentRoman;
}*/


//Még ez sem szép, az adatok objektumban lesznek tárolva

var rules = {
  '1': 'I',
  '4': 'IV',
  '5': 'V',
  '9': 'IX',
  '10': 'X',
  '40': 'XL',
  '50': 'L',
  '90': 'XC',
  '100': 'C',
  '400': 'CD',
  '500': 'D',
  '900': 'CM',
  '1000': 'M'
}

function roman(arabic) {
  if (!arabic) {
    return '';
  }

  var numbers = Object.keys(rules).filter(function (n) {
    return Number(n) <= arabic;
  });

  var currentArabic = numbers.pop();
  var currentRoman = rules[currentArabic];

  return  currentRoman + roman(arabic - currentArabic);
}

module.exports = roman;
