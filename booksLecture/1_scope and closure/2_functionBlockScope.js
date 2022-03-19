function foo(a) {
	var b = 2;

	// some code

	function bar() {
		// ...
	}

	// more code

	var c = 3;
}

//in this snippet, the scope bubble for foo(..) includes identifiers a, b, c and identifier bar
//Because a, b, c, and bar all belong to the scope bubble of foo(..), they are not accessible outside of foo(..).






function doSomething(a) {
	b = a + doSomethingElse( a * 2 );

	console.log( b * 3 );
}

function doSomethingElse(a) {
	return a - 1;
}

var b;

doSomething( 2 ); // 15

// In this snippet, the b variable and the doSomethingElse(..) function are likely "private" details of how doSomething(..) does its job.
//  Giving the enclosing scope "access" to b and doSomethingElse(..) is not only unnecessary but also possibly "dangerous", 
//  in that they may be used in unexpected ways

// A more "proper" design would hide these private details inside the scope of doSomething(..), such as:

function doSomething(a) {
	function doSomethingElse(a) {
		return a - 1;
	}

	var b;

	b = a + doSomethingElse( a * 2 );

	console.log( b * 3 );
}

doSomething( 2 ); // 15
// The functionality and end-result has not been affected, but the design keeps private details private, which is usually considered better software.


function foo() {
	function bar(a) {
		i = 3; // changing the `i` in the enclosing scope's for-loop
		console.log( a + i );
	}

	for (var i=0; i<10; i++) {
		bar( i * 2 ); // oops, infinite loop ahead!
	}
}

foo();


// If "function" is the very first thing in the statement, then it's a function declaration. Otherwise, it's a function expression.


// Immediate invoked function
// Invoking Function Expressions Immediately
var a = 2;

(function foo(){ // <-- insert this

	var a = 3;
	console.log( a ); // 3

})(5); // <-- and this

console.log( a ); // 2

// Anonymous function expressions are quick and easy to type, and many libraries and tools tend to encourage this idiomatic style of code.
//  However, they have several draw-backs to consider:

// The best practice is to always name your function expressions:

setTimeout( function timeoutHandler(){ // <-- Look, I have a name!
	console.log( "I waited 1 second!" );
}, 1000 );


//Of course, IIFE's don't need names


var a = 2;

(function IIFE( global ){

	var a = 3;
	console.log( a ); // 3
	console.log( global.a ); // 2

})( window );

console.log( a ); // 2




var a = 2;

(function IIFE( d ){
	d( window );
})(function def( global ){

	var a = 3;
	console.log( a ); // 3
	console.log( global.a ); // 2

});