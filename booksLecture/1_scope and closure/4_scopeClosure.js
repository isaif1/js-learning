//Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

function foo() {
	var a = 2;

	function bar() {
		console.log( a ); // 2
	}

	bar();//function bar() has a closure over the scope of foo()
}

foo();


// //below case is not of closure, it is called dynamic scope will not get expected result
// //it will search for global scope after searching in the function

// function bar() {
// 	console.log( a ); // referenceError
// }

// function foo() {
// 	var a = 2;

// 	bar();//function bar() has a closure over the scope of foo()
// }

// foo();


function foo() {
	var a = 2;

	function bar() {
		console.log( a );
	}

	return bar;//here we are returning function then it's lexical scope will also return
}

var a=5;
var baz = foo();

baz(); // 2 -- Whoa, closure was just observed, man.

//bar() has a lexical scope closure over that inner scope of foo() which keeps that scope alive for bar() to reference at any later time.
//bar() still has a reference to that scope, and that reference is called closure.


function wait(message) {

	setTimeout( function timer(){
		console.log( message );
	}, 1000 );

}

wait( "Hello, closure!" );



// AJAX example
function setupBot(name,selector) {
	$( selector ).click( function activator(){
		console.log( "Activating: " + name );
	} );
}

setupBot( "Closure Bot 1", "#bot_1" );
setupBot( "Closure Bot 2", "#bot_2" );


//below (the enclosing/global scope that also holds a). a is found via normal lexical scope look-up, not really via closure.
var a = 2;

(function IIFE(){
	console.log( a );
})();

//The spirit of this code snippet is that we would normally expect for the behavior to be that the numbers "1", "2", .. "5" would be printed out,
// one at a time, one per second, respectively.

// In fact, if you run this code, you get "6" printed out 5 times, at the one-second intervals.
//this loop will be running in the callStack untill it is not complete, but after completion i will be 6
//then first settime out will be in the callstack and execute
for (var i=1; i<=5; i++) {
	setTimeout( function(){
		console.log( i );
	}, i*1000 );
}


//IIFE functions runs immediately, with their current closure
//The use of an IIFE inside each iteration created a new scope for each iteration, which gave our timeout function callbacks the opportunity to close over a new scope for each iteration, 
//one which had a variable with the right per-iteration value in it for us to access.

for (var i=1; i<=5; i++) {
	(function(j){
		setTimeout( function timer(){
			console.log( j );
		}, j*1000 );
	})( i );
}


//But, that's not all! (in my best Bob Barker voice). There's a special behavior defined for let declarations used in the head of a for-loop. 
// This behavior says that the variable will be declared not just once for the loop, but each iteration. 
// And, it will, helpfully, be initialized at each subsequent iteration with the value from the end of the previous iteration.

for (let i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}