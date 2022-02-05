//falsy values are
// false
// ""
// null
// undefined
// 0

let myvar = "";//falsy will be for undefined, null,0,false as well
if (myvar) {
    console.log("value is not truthy");
} else {
    console.log("value is falsy");
}

//ternary operator

let value = myvar ? 'true' : 'false';
console.log(value);

//there are && and || operator
if (1 && 1) console.log("hello");