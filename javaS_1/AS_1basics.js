// Everything in JS happen inside a Execution Context
// it has two components
// 1-memory (variable environment) - All the variables and fucntions stored in key:value pair
// 2-code (thread of execution) - code executed line by line here

//What Happens when you run js code
//execution context is created when we run the program

//there are two phases->Memory Creation Phase and Execution Phase
//in both phases execution context is created

//In the first Phase that is Creation Phase
//JS Creates memory for all the variables in memory segment
var n=2;
function square(num){
    var ans = num*num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);

//for the above code JS creates memory for n=undefined, square : whole function, square2 = undefined, square4 = undefined

//Now Next phase code execution phase, JS will run code line by line
// and value of variable will be declare
//so from code n will be assign value 2 from global scope, next function, it will do nothing, then when we invoke function
//then another local execution context will be create in code execution component
//it has again two component memory and code

//so when creating memory for function then parameter and variable will be assign memory
//here also will be code execution phase ans will be assigned 4 from undefined, in local memory then context return back to where this function was invoked
// that is line 20 and update value of square2 to 4, that has been return, after it function execution xontext will be deleted

//similar thing will be happen for square4

//after this js program will done then whole global Execution context will also deleted

//CALL STACK
//these all execution context are managed by call stack
// when programm is run then GEC is created and pushed to call stack
//when execution context is created for function then it also put on call stack, and code will be run of that function
//when function execution context return some value then this EC removed from call stack and controll move back to GEC

//this call stack is also known as
// CALL STACK
// EXECUTION CONTEXT STACK
//PROGRAM STACK
//CONTROL STACK
//RUNTIME STACK
//MACHINE STACK

//callStack also keeps that at which line control is
//lets talk some about debugger from above code
//when we put debugger on line 14 then in call stack there will be only GEC that has been created
//if we put debugger at line 20 then then there will be one more function EC will create and will be put in the call stack above GEC
//and control will be move to the Function Execution Context 
