//var arr = process.argv.slice(2);

// v1.0
/*var output = 0;
for(var i = 2; i < process.argv.length; i++){
  output += Number(process.argv[i]);
}

console.log(output);*/

// v2.0 array.reduce()-szal
/*var arr = process.argv.slice(2);

var output = arr.reduce( (acc, e) => (Number(acc) + Number(e)) );

console.log(output);*/



// v3.0

console.log( process.argv
            .slice(2)
            .map((e) => Number(e))
            .reduce( (acc, e) => (acc + e)) );
