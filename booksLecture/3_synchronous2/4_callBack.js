//all the functions that are acting as asynchronous are called callback

// A
ajax( "..", function(){
	// C
} );
// B

//// A and // B represent the first half of the program (aka the now), and // C marks the second half of the program (aka the later)
//callback function wraps or encapsulates the continuation of the program.

//multitasker is nothing but fast context switcher


//DOING VS PLANNING
z = x;
x = y;
y = z;
//these three statements are temporally bound to execute in a certain order
//We think in step-by-step terms, but the tools (callbacks) available to us in code are not expressed in a step-by-step fashion once we move from synchronous to asynchronous.
