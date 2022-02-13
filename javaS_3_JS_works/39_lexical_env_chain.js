const lastName = "lastname";

//For below code, function execution code will create inside of code execution of 
//global execution context
//last name is not in local memory then it will ask to its parent till GEC
//this is what called lexical environment, means going to its parent function and so on
const printName = function(){
const firstName = "firstName";
console.log(firstName);
console.log(lastName);
}

printName();
