//et's imagine a site that displays a list of status updates (like a social network news feed) that progressively loads as the user scrolls down the list. 
//To make such a feature work correctly, (at least) two separate "processes" will need to be executing simultaneously

//The first "process" will respond to onscroll events (making Ajax requests for new content) as they fire when the user has scrolled the page further down.
// The second "process" will receive Ajax responses back (to render content onto the page).

//Note: Concurrency also introduces an optional notion of these "processes" interacting with each other. We'll come back to that later.

// For a given window of time (a few seconds worth of a user scrolling), let's visualize each independent "process" as a series of events/operations:

// "Process" 1 (onscroll events):

// onscroll, request 1
// onscroll, request 2
// onscroll, request 3
// onscroll, request 4
// onscroll, request 5
// onscroll, request 6
// onscroll, request 7
// "Process" 2 (Ajax response events):

// response 1
// response 2
// response 3
// response 4
// response 5
// response 6
// response 7

//It's quite possible that an onscroll event and an Ajax response event could be ready to be processed at exactly the same moment

// onscroll, request 1
// onscroll, request 2          response 1
// onscroll, request 3          response 2
// response 3
// onscroll, request 4
// onscroll, request 5
// onscroll, request 6          response 4
// onscroll, request 7
// response 6
// response 5
// response 7

//But, going back to our notion of the event loop from earlier in the chapter,
// JS is only going to be able to handle one event at a time, so either onscroll, request 2 is going to happen first or response 1 is going to happen first,

// Event Loop Queue:

// onscroll, request 1   <--- Process 1 starts
// onscroll, request 2
// response 1            <--- Process 2 starts
// onscroll, request 3
// response 2
// response 3
// onscroll, request 4
// onscroll, request 5
// onscroll, request 6
// response 4
// onscroll, request 7   <--- Process 1 finishes
// response 6
// response 5
// response 7            <--- Process 2 finishes

//The single-threaded event loop is one expression of concurrency (there are certainly others, which we'll come back to later).


//Noninteracting
// As two or more "processes" are interleaving their steps/events concurrently within the same program, they don't necessarily need to interact with each other if the tasks are unrelated. If they don't interact, nondeterminism is perfectly acceptable.

// For example:

var res = {};

function foo(results) {
	res.foo = results;
}

function bar(results) {
	res.bar = results;
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );
// foo() and bar() are two concurrent "processes," and it's nondeterminate which order they will be fired in. But we've constructed the program so it doesn't matter what order they fire in, because they act independently and as such don't need to interact.

// This is not a "race condition" bug, as the code will always work correctly, regardless of the ordering.



//INTERACTION
//basically you need to prevent race condition, means alag alag results na aayein
var res = [];

function response(data) {
	res.push( data );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );

//The concurrent "processes" are the two response() calls that will be made to handle the Ajax responses. They can happen in either-first order.
// Let's assume the expected behavior is that res[0] has the results of the "http://some.url.1" call, and res[1] has the results of the "http://some.url.2" call.
//  Sometimes that will be the case, but sometimes they'll be flipped, depending on which call finishes first. 
// There's a pretty good likelihood that this nondeterminism is a "race condition" bug.

// So, to address such a race condition, you can coordinate ordering interaction:

var res = [];

function response(data) {
	if (data.url == "http://some.url.1") {
		res[0] = data;
	}
	else if (data.url == "http://some.url.2") {
		res[1] = data;
	}
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );
//Through simple coordination, we eliminated the "race condition" nondeterminism.



var a, b;

function foo(x) {
	a = x * 2;
	baz();
}

function bar(y) {
	b = y * 2;
	baz();
}

function baz() {
	console.log(a + b);
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );

//In this example, whether foo() or bar() fires first, it will always cause baz() to run too early (either a or b will still be undefined), 
//but the second invocation of baz() will work, as both a and b will be available.


// There are different ways to address such a condition. Here's one simple way:

var a, b;

function foo(x) {
	a = x * 2;
	if (a && b) {
		baz();
	}
}

function bar(y) {
	b = y * 2;
	if (a && b) {
		baz();
	}
}

function baz() {
	console.log( a + b );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );

//below is the code if only one finishes the border line
var a;

function foo(x) {
	a = x * 2;
	baz();
}

function bar(x) {
	a = x / 2;
	baz();
}

function baz() {
	console.log( a );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );


//for a simple one we can also check if it is undefined then update value
var a;

function foo(x) {
	if (a == undefined) {
		a = x * 2;
		baz();
	}
}

function bar(x) {
	if (a == undefined) {
		a = x / 2;
		baz();
	}
}

function baz() {
	console.log( a );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );