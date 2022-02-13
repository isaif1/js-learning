console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

//global memory
 //function initialize with function will be in global execution context before executing first line
function myFunction(){ 
    console.log('Hello you are here for my name');
}

//all the below variables will be in the global execution context
var firstName = "Harshit";
var lastName = 'kumar';
var fullName = firstName+" "+lastName;

console.log(fullName);

//so before execution, firstname, lastname and fullname and myFunction will be there in the GEC
//all the varibales are stored in the global object as key value pair
// finally it will go line by line
//first global execution context will create then code will be execute