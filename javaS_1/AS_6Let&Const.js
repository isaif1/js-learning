//let and const are hoisted very differently than var
//yes it is true that let and const are hoisted
//these are in the temporal dead zone in the time being
// you can only access let only after you have initialized it
//let and const initialized memory in different memory (not in global memory space) space and we cannot access them before putting some value in them


console.log(a);//cannot access a before initialization
let a=10;
var b=100;
console.log(x)//x is not defined
//Temporal dead zone is time when let is hoisted and until it initialize some value
//when you will try to access some variable in temporal dead zone them there will be reference error

console.log(window.a);//window represent only global objects, so let will not be in the window object

//let is strict than var, 
//we cannot redeclare it

// let a=100//syntax error you will get

// var a=10; //this is also not possible

// var b=1000;//it is possible , there will be no error

//const works as same as let
const c=100; //const should be declare in the same line
a=100;

c=50; //not possible, you will get type error

// const d:// it would be syntac error


//wheneever you want to use const use as much
//then try to use let
//use var very conciously

//temporal dead zone sometimes let to some unexpected error
//so always put them on the top of everything(initilizing + dexlaration), using we are shrinking the remporal dead zone


// > let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
// -> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
// -> level of strictness ... var<<let<<const.
// -> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
//     let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
//     const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
// -> syntax error is similar to compile error. while type and reference error falls under run time error.
// -> syntax error ... violation of JS syntax
//     type error ...  while trying to re-initialize const variable
//     reference error ... while trying to access variable which is not there in global memory.