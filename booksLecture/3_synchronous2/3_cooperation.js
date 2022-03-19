//Another expression of concurrency coordination is called "cooperative concurrency."

var res = [];

// `response(..)` receives array of results from the Ajax call
function response(data) {
	// add onto existing `res` array
	res = res.concat(
		// make a new transformed array with all `data` values doubled
		data.map( function(val){
			return val * 2;
		} )
	);
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );

//if usl1, gives result of if it's say 10 million records, 
//that can take a while to run (several seconds on a powerful laptop, much longer on a mobile device, etc.).
//While such a "process" is running, nothing else in the page can happen, including no other response(..) calls, no UI updates,
// not even user events like scrolling, typing, button clicking, and the like. That's pretty painful.

// So, to make a more cooperatively concurrent system, one that's friendlier and doesn't hog the event loop queue, 
//you can process these results in asynchronous batches, after each one "yielding" back to the event loop to let other waiting events happen.

var res = [];

// `response(..)` receives array of results from the Ajax call
function response(data) {
	// let's just do 1000 at a time
	var chunk = data.splice( 0, 1000 );

	// add onto existing `res` array
	res = res.concat(
		// make a new transformed array with all `chunk` values doubled
		chunk.map( function(val){
			return val * 2;
		} )
	);

	// anything left to process?
	if (data.length > 0) {
		// async schedule next batch
		setTimeout( function(){
			response( data );
		}, 0 );
	}
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );


//Jobs
// As of ES6, there's a new concept layered on top of the event loop queue, called the "Job queue."
//  The most likely exposure you'll have to it is with the asynchronous behavior of Promises 


//Let's imagine an API for scheduling Jobs (directly, without hacks), and call it schedule(..). Consider:

console.log( "A" );

setTimeout( function(){
	console.log( "B" );
}, 0 );

// theoretical "Job API"
schedule( function(){
	console.log( "C" );

	schedule( function(){
		console.log( "D" );
	} );
} );
// You might expect this to print out A B C D, but instead it would print out A C D B,
// because the Jobs happen at the end of the current event loop tick, and the timer fires to schedule for the next event loop tick (if available!).


//Statement Ordering
//A JavaScript program is (practically) always broken up into two or more chunks, where the first chunk runs now and the next chunk runs later, 
//in response to an event. Even though the program is executed chunk-by-chunk,
// all of them share the same access to the program scope and state, so each modification to state is made on top of the previous state.