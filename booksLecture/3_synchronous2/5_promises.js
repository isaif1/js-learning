// But what if we could uninvert that inversion of control? What if instead of handing the continuation of our program to another party, 
// we could expect it to return us a capability to know when its task finishes, and then our code could decide what to do next?
// "promise is related to inversion of control"

// This paradigm is called Promises.

function add(getX,getY,cb) {
	var x, y;
	getX( function(xVal){
		x = xVal;
		// both are ready?
		if (y != undefined) {
			cb( x + y );	// send along sum
		}
	} );
	getY( function(yVal){
		y = yVal;
		// both are ready?
		if (x != undefined) {
			cb( x + y );	// send along sum
		}
	} );
}

// `fetchX()` and `fetchY()` are sync or async
// functions
add( fetchX, fetchY, function(sum){
	console.log( sum ); // that was easy, huh?
} );


//Promise Value
function add(xPromise,yPromise) {
	// `Promise.all([ .. ])` takes an array of promises,
	// and returns a new promise that waits on them
	// all to finish
	return Promise.all( [xPromise, yPromise] )

	// when that promise is resolved, let's take the
	// received `X` and `Y` values and add them together.
	.then( function(values){
		// `values` is an array of the messages from the
		// previously resolved promises
		return values[0] + values[1];
	} );
}

// `fetchX()` and `fetchY()` return promises for
// their respective values, which may be ready
// *now* or *later*.
add( fetchX(), fetchY() )

// we get a promise back for the sum of those
// two numbers.
// now we chain-call `then(..)` to wait for the
// resolution of that returned promise.
.then( function(sum){
	console.log( sum ); // that was easier!
} );

//it's possible that the resolution of a Promise is rejection instead of fulfillment. 
//Unlike a fulfilled Promise, where the value is always programmatic, a rejection value -- 
//commonly called a "rejection reason" -- can either be set directly by the program logic, or it can result implicitly from a runtime exception.

// With Promises, the then(..) call can actually take two functions, the first for fulfillment (as shown earlier), and the second for rejection:

add( fetchX(), fetchY() )
.then(
	// fulfillment handler
	function(sum) {
		console.log( sum );
	},
	// rejection handler
	function(err) {
		console.error( err ); // bummer!
	}
);

//Moreover, once a Promise is resolved, it stays that way forever -- it becomes an immutable value at that point -- 
//and can then be observed as many times as necessary.


// Completion Event
// With callbacks, the "notification" would be our callback invoked by the task (foo(..)). But with Promises, we turn the relationship around, 
// and expect that we can listen for an event from foo(..), and when notified, proceed accordingly.

function foo(x) {
	// start doing something that could take a while

	// make a `listener` event notification
	// capability to return

	return listener;
}

var evt = foo( 42 );

evt.on( "completion", function(){
	// now we can do the next step!
} );

evt.on( "failure", function(err){
	// oops, something went wrong in `foo(..)`
} );

// foo(..) expressly creates an event subscription capability to return back, and the calling code receives and registers the two event handlers against it.
//Instead of passing the callbacks to foo(..), it returns an event capability we call evt, which receives the callbacks.

//One important benefit is that multiple separate parts of the code can be given the event listening capability, and they can all
// independently be notified of when foo(..) completes to perform subsequent steps after its completion:

var evt = foo( 42 );

// let `bar(..)` listen to `foo(..)`'s completion
bar( evt );

// also, let `baz(..)` listen to `foo(..)`'s completion
baz( evt );





//\\//\\//\\//\\//\\//\\//\\/\/\/\//\/\/\/\/\/\\\/\//\\/\/\/\//\\/
//The pattern shown with new Promise( function(..){ .. } ) is generally called the "revealing constructor".
function foo(x) {
	// start doing something that could take a while

	// construct and return a promise
	return new Promise( function(resolve,reject){
		// eventually, call `resolve(..)` or `reject(..)`,
		// which are the resolution callbacks for
		// the promise.
	} );
}

var p = foo( 42 );

bar( p );

baz( p );


//You can probably guess what the internals of bar(..) and baz(..) might look like:

function bar(fooPromise) {
	// listen for `foo(..)` to complete
	fooPromise.then(
		function(){
			// `foo(..)` has now finished, so
			// do `bar(..)`'s task
		},
		function(){
			// oops, something went wrong in `foo(..)`
		}
	);
}

// ditto for `baz(..)`
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//there is another way of seeing it
function bar() {
	// `foo(..)` has definitely finished, so
	// do `bar(..)`'s task
}

function oopsBar() {
	// oops, something went wrong in `foo(..)`,
	// so `bar(..)` didn't run
}

// ditto for `baz()` and `oopsBaz()`

var p = foo( 42 );

p.then( bar, oopsBar );

p.then( baz, oopsBaz );

//\\//\/\\JS callstack is actually main thread