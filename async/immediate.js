
setImmediate(function() {  // ~ legközelebb, amikor van rá időd, csináld meg...
  console.log('immediate');
})

setTimeout(function() {
  console.log('0.1 sec later')
}, 100);

var i = 12451; // ezt csökkenteni kell, mert a stack-nek túl nagy!
/*while(i > 0){
  i--;
}*/

// Rekurzióval csökkentsük az i értékét, így nem a while foglalja le a szálat sok-sok ideig, DE a stack KEVÉS neki!!!!
function countDown() {
  if(i > 0){
    i--;
    countDown();
  }
}

countDown();

console.log('end');
