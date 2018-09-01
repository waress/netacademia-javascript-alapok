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
  '5': 'V'
}

function roman(arabic) {
  if (!arabic) {
    return '';
  }
  var currentArabic = arabic === 5 ? 5 : 1;
  var currentRoman = rules[currentArabic];

  return roman(arabic - currentArabic) + currentRoman;
}





module.exports = roman;
