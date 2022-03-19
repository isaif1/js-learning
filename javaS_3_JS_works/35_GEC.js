//compile
    //there will be some preliminery steps that will execute first
    //first it will be early error checking(by using compile)
    //then determine scope for variabes
    //compile has three phase, tokenizing, parsing, code generation
console.log(this);
console.log(window);
console.log(myName);//iska utput thora different aa rha, do not bother
var myName = "harsh";  //saying overright value of name in global creation phase
console.log(myName);

    //which code is not in function then it belongs to global scope

//Code Execute
    //to execute code it will create global execution context
    //it has two phase, creation phase, code execution phase
    //window onject is already defined in html,global object is window
    //global execution context
        //creation phase
        //execution phase
        //isme bariables ko values assign honge
        //in global context, this will be equal to currrent window object
        //js is synchronous,single threaded programming language(first line execute then 2nd line execute)
        //asynchronous feature browser provide krta hai
// global object can be different in node server
