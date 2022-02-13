//it keeps record of which execution context (function/global) is running right now
//also keeps record that which line is being execute currently
//whenever a function is called then new execution context is created that is called 
//function execution context in the call stack


let foo = "foo";
console.log(foo);
function getFullName(firstName,lastName){
    console.log(arguments);//it is an array like object
    let myvar = 'var inside function';
    console.log(myvar);
    const fullName = firstName+" "+lastName;
    console.log(fullName);
}

//when this function will call then new function execution context will create in global
//execution context
//it has also two phase 1-local memory creation phase and 2-code execute
//local memory creation phase contains array like object
//this memory contains arguments

const personName = getFullName("first",'last');//after this code FEC will be remove from 
//call stack and code will switch to GEC again
console.log(personName);