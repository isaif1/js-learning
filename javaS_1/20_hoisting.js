//here we can call function before declaring it, unlike another language
//but it is possible only in case of declaration function
//expression function will give error
//hoisting is moving declarations to the top.
//yahan declare ki baat ho rhai hai, assign ki nahi
//JavaScript only hoists declarations, not initializations.
//To avoid bugs, always declare all variables at the beginning of every scope.

myfunction();


// declaration function
function myfunction(){
    console.log("hello world!");
}


//these will give error,, if we try to access it before declare
// const myfunction = function(){
//     console.log("hello world!");
// }

// const myfunction = () =>{
//     console.log("hello world!");
// }

//this behaviour is called hoisting

console.log(num); //this will give undefined value in case of var, 
// but error in case of let or const
var num  =5;
console.log(num);

// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared:
//using "use strict" we can change hoisting behaviour