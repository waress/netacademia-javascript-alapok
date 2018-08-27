var fs = require('fs');
fs.readFile('my-text.txt', function(err, content) { // fájl beolvasás lassabb
  console.log(content.toString());
  console.log('real end');
});

console.log('end');
