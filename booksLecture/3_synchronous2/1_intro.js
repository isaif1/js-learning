//The problem most developers new to JS seem to have is that later doesn't happen strictly and immediately after now. In other words, 
// tasks that cannot complete now are, by definition, going to complete asynchronously, 
// and thus we will not have blocking behavior as you might intuitively expect or want.

//AJAX->XMLHttpRequest object to communicate with servers. It can send and receive information in various formats

//You're probably aware that standard Ajax requests don't complete synchronously
//But that's not how we do Ajax. We make an asynchronous Ajax request now, and we won't get the results back until later.

// The simplest (but definitely not only, or necessarily even best!) way of "waiting"
// from now until later is to use a function, commonly called a callback function:

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", function myCallbackFunction(data){

	console.log( data ); // Yay, I gots me some `data`!

} );

//ajax synchronously work ni krta hai,
//it you try to console.log exact after in the code then you will get empty, because ajax is still fetching data from server
//that is why we return callback function, so that when data comes from server, only then it will return something
//in between programme will be stop

// WARNING->we should not use ajax request synchronously, because  it locks the browser UI (buttons, menus, scrolling, etc.) 
// and prevents any user interaction whatsoever. This is a terrible idea, and should always be avoided.

//Any time you wrap a portion of code into a function and specify that it should be executed in response to some event (timer, mouse click, Ajax response, etc.), 
// you are creating a later chunk of your code, and thus introducing asynchrony to your program.
function now() {
	return 21;
}

function later() {
	answer = answer * 2;
	console.log( "Meaning of life:", answer );
}

var answer = now();

setTimeout( later, 1000 ); // Meaning of life: 42




//ASYNC CONSOLE
// There is no specification or set of requirements around how the console.
// * methods work -- they are not officially part of JavaScript, but are instead added to JS by the hosting environment

//So, different browsers and JS environments do as they please, which can sometimes lead to confusing behavior.

// If you run into this rare scenario, the best option is to use breakpoints in your JS debugger instead of relying on console output. 
//The next best option would be to force a "snapshot" of the object in question by serializing it to a string, like with JSON.stringify(..).


//EVENT LOOP
//So, for example, when your JS program makes an Ajax request to fetch some data from a server, 
//you set up the "response" code in a function (commonly called a "callback"), and the JS engine tells the hosting environment,
// "Hey, I'm going to suspend execution for now, but whenever you finish with that network request, and you have some data, please call this function back."

//The browser is then set up to listen for the response from the network,
// and when it has something to give you, it schedules the callback function to be executed by inserting it into the event loop.

//Let's conceptualize it first through some fake-ish code:

// `eventLoop` is an array that acts as a queue (first-in, first-out)
var eventLoop = [ ];
var event;

// keep going "forever"
while (true) {
	// perform a "tick"
	if (eventLoop.length > 0) {
		// get the next event in the queue
		event = eventLoop.shift();

		// now, execute the next event
		try {
			event();
		}
		catch (err) {
			reportError(err);
		}
	}
}

//As you can see, there's a continuously running loop represented by the while loop, and each iteration of this loop is called a "tick." 
// For each tick, if an event is waiting on the queue, it's taken off and executed.These events are your function callbacks.

//It's important to note that setTimeout(..) doesn't put your callback on the event loop queue. What it does is set up a timer; 
//when the timer expires, the environment places your callback into the event loop
//at each moment invoking the JS engine, called the "event loop."
//environment places your callback into the event loop,
//environment can be browser, nodeJs etc there are several that coes with ES6.

// In other words, the JS engine has had no innate sense of time, but has instead been an on-demand execution environment for any arbitrary snippet of JS.
//  It's the surrounding environment that has always scheduled "events"


//Parallel Threading

//It's very common to conflate the terms "async" and "parallel," but they are actually quite different. 
//Remember, async is about the gap between now and later. But parallel is about things being able to occur simultaneously.

//The most common tools for parallel computing are processes and threads. Processes and threads execute independently and may execute simultaneously:
// on separate processors, or even separate computers, but multiple threads can share the memory of a single process.

// An event loop, by contrast, breaks its work into tasks and executes them in serial, disallowing parallel access and changes to shared memory.
// Parallelism and "serialism" can coexist in the form of cooperating event loops in separate threads.


//Run-to-Completion
// Because of JavaScript's single-threading, the code inside of foo() (and bar()) is atomic, which means that once foo() starts running,
// the entirety of its code will finish before any of the code in bar() can run, or vice versa. This is called "run-to-completion" behavior.

// In fact, the run-to-completion semantics are more obvious when foo() and bar() have more code in them, such as:

var a = 1;
var b = 2;

function foo() {
	a++;
	b = b * a;
	a = b + 3;
}

function bar() {
	b--;
	a = 8 + b;
	b = a * 2;
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );

//Because foo() can't be interrupted by bar(), and bar() can't be interrupted by foo(), this program only has two possible outcomes
// depending on which starts running first -- if threading were present,
// and the individual statements in foo() and bar() could be interleaved, the number of possible outcomes would be greatly increased!

// Chunk 1:

var a = 1;
var b = 2;
// Chunk 2 (foo()):

a++;
b = b * a;
a = b + 3;
// Chunk 3 (bar()):

b--;
a = 8 + b;
b = a * 2;
// Chunks 2 and 3 may happen in either-first order, so there are two possible outcomes for this program, as illustrated here:

// Outcome 1:

var a = 1;
var b = 2;

// foo()
a++;
b = b * a;
a = b + 3;

// bar()
b--;
a = 8 + b;
b = a * 2;

a; // 11
b; // 22
// Outcome 2:

var a = 1;
var b = 2;

// bar()
b--;
a = 8 + b;
b = a * 2;

// foo()
a++;
b = b * a;
a = b + 3;

a; // 183
b; // 180

//Note: If there was a function in JS that somehow did not have run-to-completion behavior, we could have many more possible outcomes,
// right? It turns out ES6 introduces just such a thing (see Chapter 4 "Generators"), but don't worry right now, we'll come back to that!