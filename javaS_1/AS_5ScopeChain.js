//Scope and JS are directly related to lexical environment
function a(){
    console.log(a);
    var y=100;
    b();
function b(){
    console.log(a);
}
}

var a=10;
a();

console.log(y);//you will get reference error because  is not in the lexical scope

//what is the scope of variables

//is some varibale in the scope if function
//it is directly depend on lexical environment
//lexical environment is the local memory along with the lexical environment with its parent
//lexical means heirarchy
//c function is lexically sitting inside a function
//a is lexically inside global scope

//if we are in the lexical space of function then in it's memory it also have the memory reference of it's parent memory space

//first any variable is try to find out in the local memory then if not found then it search in the lexical environment of it's parent

//way of fincding variable in the lexical envieronment, then it is called scope chain

//scope(current memory variables)
//lexical environment(local memory + reference to the lexical env of it's parent)
//scope chain(searching variable in parent then its parent etc)

//for the above code b have lexical environment reference to a
//if some variable is not found that means it is not inside the scope chain


// let and const behave different in terms of scope and hoisting
//let and const comes recently