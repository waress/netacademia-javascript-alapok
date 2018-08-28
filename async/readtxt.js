var fs = require('fs');

/*function readTxt(fileName, callback) {
  fs.readFile(fileName + '.txt', function(err, content){
    callback(null, content.toString());
  });
}

readTxt('my-text', console.log);*/


// Így gond nélkül lefut

// De, ha nem létező fájlra prbálunk:

function readTxt(fileName, callback) {
  fs.readFile(fileName + '.txt', function(err, content){
    if(err){
      return callback(err);
    }
    return callback(null, content.toString());

  });
}

readTxt('my-text1', console.log);
