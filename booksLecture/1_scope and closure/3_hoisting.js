a = 2;
var a;
console.log( a );//it will print 2

// When you see var a = 2;, you probably think of that as one statement. But JavaScript actually thinks of it as two statements: var a; and a = 2;.
// The first statement, the declaration, is processed during the compilation phase. 
// The second statement, the assignment, is left in place for the execution phase.


console.log( b );//it will print undefined
var b = 2;

//Part of the compilation phase was to find and associate all declarations with their appropriate scopes.
// function declarations are "moved" from where they appear in the flow of the code to the top of the code. This gives rise to the name "Hoisting".
//the best way to think about things is that all declarations, both variables and functions, are processed first, before any part of your code is executed.
//The first statement, the declaration, is processed during the compilation phase. The second statement, the assignment, is left in place for the execution phase.


foo();
//Function we are now examining itself exhibits that var a is hoisted to the top of foo(..) (not, obviously, to the top of the program)
function foo() {
	console.log( a ); // undefined

	var a = 2;
}





// Function declarations are hoisted, as we just saw. But function expressions are not.

foo(); // not ReferenceError, but TypeError!

var foo = function bar() {
	// ...
};




//Also recall that even though it's a named function expression, the name identifier is not available in the enclosing scope:
foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
	// ...
};

//functions are hoisted first, and then variables.

//here function hoist first and valirable is undefined till now, o this will give error
foo(); // "b"

var a = true;
if (a) {
   function foo() { console.log( "a" ); }
}
else {
   function foo() { console.log( "b" ); }
}


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/\\/\\

foo(); // 1

var foo;//this will hoist as second element after function

function foo() {
	console.log( 1 );//this function will hoist function on top of everything
}

foo = function() {
	console.log( 2 );
};
//if we call foo here then second function will be called why?