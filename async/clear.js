var timeout = setTimeout(function() {
  console.log('Hello from the future!');
}, 5000);

clearTimeout(timeout);
