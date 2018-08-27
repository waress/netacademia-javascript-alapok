
setImmediate(function() {  // ~ legközelebb, amikor van rá időd, csináld meg...
  console.log('immediate');
})

setTimeout(function() {
  console.log('0.1 sec later')
}, 100);

var i = 1245123; // ezt csökkenteni kell, mert a stack-nek túl nagy!
/*while(i > 0){
  i--;
}*/

// Rekurzióval csökkentsük az i értékét, így nem a while foglalja le a szálat sok-sok ideig, DE a stack KEVÉS neki!!!!
function countDown() {
  if(i > 0){
    i--;
    setImmediate(countDown); // így feldarabolódik a szálon a figyelés, a figyelési pontoknál végrahajthat feladatokat
  }
}

countDown();

console.log('end');
