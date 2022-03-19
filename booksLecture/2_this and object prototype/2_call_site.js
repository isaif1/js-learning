
//this for a function is depends on the call site
function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope
     
    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz(); // <-- call-site for `baz`


//Take care when analyzing code to find the actual call-site (from the call-stack), because it's the only thing that matters for this binding.
//Another way of seeing the call-stack is using a debugger tool in your browser
// Another way of seeing the call-stack is using a debugger tool in your browser. Most modern desktop browsers have built-in developer tools, 
// which includes a JS debugger. In the above snippet, you could have set a breakpoint in the tools for the first line of the foo() function, or simply inserted the debugger; 
// statement on that first line. When you run the page, the debugger will pause at this location, 
// and will show you a list of the functions that have been called to get to that line, which will be your call stack. So, if you're trying to diagnose this binding, 
// use the developer tools to get the call-stack, then find the second item from the top, and that will show you the real call-site.



//\/\\/\/\/\/\/\/\/\//\/\/\/\/\\\\
// DEFAULT BINDING
// IMPLICIT BINDING
// EXPLICIT BINDING
// new BINDING
//You must inspect the call-site and determine which of 4 rules applies. 

// Default binding
function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // 2
//we see that when foo() is called, this.a resolves to our global variable a. 
//Why? Because in this case, the default binding for this applies to the function call, and so points this at the global object.


// If strict mode is in effect, the global object is not eligible for the default binding, so the this is instead set to undefined.

function foo() {
	"use strict";

	console.log( this.a );
}

var a = 2;

foo(); // TypeError: `this` is `undefined`



// : Intentionally mixing strict mode and non-strict mode together in your own code is generally frowned upon.
//  Your entire program should probably either be Strict or non-Strict. 
// However, sometimes you include a third-party library that has different Strict'ness than your own code, 
//so care must be taken over these subtle compatibility details.
function foo() {
	console.log( this.a );
}

var a = 2;

(function(){
	"use strict";

	foo(); // 2
})();


// Implicit Binding??||??||//\\'\\/\/\/\//\\/\//\\/\/\/\/\/\/\/\/\\//\\/\//\\\/\/\/\/\/\\\/\//\\/\
//Another rule to consider is: does the call-site have a context object
// obj object "owns" or "contains" the function reference at the time the function is called.
function foo() {
	console.log( this.a );
}
var obj = {
	a: 2,
	foo: foo
};
obj.foo(); // 2


//example 2
function foo() {
	console.log( this.a );
}
var obj2 = {
	a: 42,
	foo: foo
};
var obj1 = {
	a: 2,
	obj2: obj2
};
obj1.obj2.foo(); // 42



// Implicityl loss
function foo() {
	console.log( this.a );
}
var obj = {
	a: 2,
	foo: foo
};
var bar = obj.foo; // function reference/alias!
var a = "oops, global"; // `a` also property on global object
bar(); // "oops, global"

//Even though bar appears to be a reference to obj.foo, in fact, it's really just another reference to foo itself. Moreover, 
//the call-site is what matters, and the call-site is bar(), which is a plain, un-decorated call and thus the default binding applies.


function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"
//they are just another reference to function
//parametre passing is also implicit assignment


function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

setTimeout( obj.foo, 100 ); // "oops, global"