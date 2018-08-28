try{
  setTimeout(function(){  // a fv mivel később fut le, ezért nem a try-hoz kapcsoldik, ezért nincs hatása a catch-nek!
    throw new Error('Probléma...');  // a callback-ben nem szabad így error-t csinálni, mert sose lehetne elkapni.
    console.log('End!');
  }, 2000);
} catch(e) {
  console.log('OK');
}
