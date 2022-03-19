// var x=1;
// a();
// b();

// console.log(x);

// function a(){
//     var x=10;
// console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }

//if we put debugger on the line 1 then there will be one GEC and all variables will be assign some memeory
//if we put variable on the line 2 then a new function context will be create and push to call atsk on top of GEC
//new local memory for this function will also create
//inside the fuction execution context it works same, first memory allocate then value assign

/*
//my conclusion is that, why we should not declare global memory because from the lexical scope it will find in the global scope
// and may be each items from stack will be removed that will take n time
*/

var x=1;
a();
b();

console.log(x);

function a(){
    var x=10;
console.log(x);
c();
}

function b(){
    var x=100;
    console.log(x);
}

function c(){
    var x=2;
    console.log(x);
}