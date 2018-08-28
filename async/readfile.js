var fs = require('fs');
fs.readFile('my-text.txt', function(err, content) { // fájl beolvasás lassabb
  console.log(content.toString());
  console.log('real end');
  console.log(err);
});

fs.readFile('asd.txt', function(err, content) {
//  console.log(content.toString());
  console.log(err);
});

console.log('end');
