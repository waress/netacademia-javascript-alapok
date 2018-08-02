function hello() {
  console.log('Szia!');
}

hello();
hello(123); // nincs hiba abból, hogy argumentummal lett meghívva, holott nincs definiálva paraméter (typescript beszólna)

hello(123, 1, 'oh');


function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

printArguments(1, 2);  // lehagyható argumentum, de így undefined lesz a c paraméter


//Változó paraméterű fv-ek (pl. console.log() is ilyen)

function printArguments2() {
  console.log(arguments);
}

printArguments2('alma', 'körte', 'dinnye');  // objektum lesz {'0': 'alma', '1': 'körte', '2': 'dinnye'} - kerülendő!

function printArguments3(...arg) { // így tömb lesz: ...
  console.log(arg);
}

printArguments3('Zoli', 'Márti', 1);
