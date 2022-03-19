//Hoisint is phenomenon in JS in which you can access any variable in JS even before you have initialized it without error
//this is not happen in other language

getName(); //hello
console.log(x); //undefined
//this is called hoisting
console.log(getName);//this will print whole function why? see line 15

var x=7;

function getName(){
    console.log("hello")
}

// because then GEC is created then in memory space first all variables and function given memory space
// function keep as it is in the memory space
//even before code starts executing, memory allocated to all function and variable

//undefined means memory is allocated but value is not initialized
//no defined means there is no memory allocated for this variables, reference not defined


getName(); //getName is not a function, becuase it behaves like variables, so there will be undefined to getName
getName2();// it will also get undeifned
console.log(x); //undefined
//this is called hoisting
console.log(getName);//this will print whole function why? see line 15

var x=7;
//what if it is case of arrow function
var getName = () => {
    console.log("hello")
}

var getName2 =function (){ //in this case also it will behave like variable
    console.log("hello")
}

//Javascript first search variable in the local Execution context