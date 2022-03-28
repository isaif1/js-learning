//functions are heart of javascript
//function acts like a value

//difference betweeen function statement and function expression is hoisting
//function statement can be called even before even creating it
//function statement cannot be call before creating it, it will be undefined

// Function Statement/declaration
function a(){
console.log(a);
}

//Function expression
var a = function(){
console.log(b);
}


//anonymous function
//function without name is anonomous function, they don't have own identity

//you will get error cause it will require name
// function (){}
//it can be used in the place where functions are used a svalues





//name functino expression

// same as expression function, but instead they have name instead of anonomous function

var a = function xyz(){
    console.log(xyz);
    }

    xyz()//cannot call because it is not in the outer scope
    //instead you can call recursion




// Different between parameter and argument

function a(param1,param2){
    console.log(a);
    }

    a('arg1','arg2');


//FIRST CLASS FUNCTION
//functions are first class citizens
//we can pass function as argument

//the ability to use function as value is called as first class function passing as argument
function a(param1){
    return function(){

    }
    }

var b=function(){
    console.log(1);
}

    a(function(){
        console.log(1);
    });

    a(b);




//Let const are declare in ecmascript

//Arrow Function, this will be done in future 
