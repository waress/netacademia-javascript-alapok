// Másik fájl betöltése node-ban

var module1 = require('./node-module'); // útvonala a node-module.js-nek (.js nem kell), amit ebből a fájlból kap, azt helyettesíti be

console.log(module1.add(2, 3));
console.log(module1.multiply(5, 5));
