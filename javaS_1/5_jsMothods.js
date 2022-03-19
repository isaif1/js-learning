// trim();  removes initial and last space
// toUpperCase();  converts to uppercase
// toLowerCase();   converts to lowerCase
// slice()


//trim
let myName = "   Trim   ";
console.log(myName.length);

//trim will return element and you have to recieve it
myName = myName.trim();
console.log(myName.length);


//toUpperCase
//toLowerCase will return element and you have to recieve it
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

//slice
console.log(myName.slice(1, 3)); // it will print only till index 2 


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