// trim();  removes initial and last space
// toUpperCase();  converts to uppercase
// toLowerCase();   converts to lowerCase
// slice()


//trim
let name = "   Trim   ";
console.log(name.length);

name = name.trim();
console.log(name.length);


//toUpperCase

console.log(name.toLowerCase());
console.log(name.toUpperCase());

//slice
console.log(name.slice(0, 3)); // it will print only till index 2


//typeof operator
// there are some data types here in js
// String
// Number
// booleans
// undefined
// null
// BigInt
// Symbol

let newName = "hari";
let age = 22;
console.log(typeof newName);
console.log(typeof age);

//convert number to string
let mystr = 22;
console.log(typeof (mystr + ""));
console.log("using method", typeof String(mystr));

let mynum = "22";
console.log(typeof (+mynum));
console.log("using method", typeof Number(mynum));