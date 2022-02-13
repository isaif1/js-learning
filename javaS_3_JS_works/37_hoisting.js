//before executing code, some variables and functions are in GEC memory
//this is called hoisting
//after code execution Global Execution Stack will be free

//here myFunction will be undefined in Global execution memory
//function expression
// var myFunction = function(){ 
//     console.log('Hello you are here for my name');
// }

//there is a stack where Global execution resides and after completion it remove
//this Global Exection has two phase
    // creation phase (it creates a global memory where variables and function resides)
    //execution phase


//let and const also have hoisting but they are uninitialized
//in GEC var myName will be given memory but it will be uninitialized
//means error will be there
// console.log(myName);//Uncaught ReferenceError: Cannot access 'myName' before initialization
// let myName;
// console.log(myName);
//myName = 'halleo'

//TDZ ->temporal dead zone
//first myname was uninitialized, then we initialize,so this time between initialize and
//uninitialize is called in Temporal Dead Zone


//it will give different error
//console.log(myName);//Uncaught ReferenceError: myName is not defined

//initially is not myName then it will treate is as var and result will be undefined
console.log(typeof myName);

//there is one called call stack, which tells that what lines have been run and which execution context is running
//call stack keeps record which EC is running and waht code is being execute
