//what if you want to force a function call to use a particular object for the this binding, without putting a property function reference on the object?
//Specifically, functions have call(..) and apply(..) methods
// Since you are directly stating what you want the this to be, we call it explicit binding.

function foo() {
	console.log( this.a );
}
var obj = {
	a: 2
};
foo.call( obj ); // 2

//If you pass a simple primitive value (of type string, boolean, or number) as the this binding, the primitive value is wrapped in its object-form 
//(new String(..), new Boolean(..), or new Number(..), respectively). This is often referred to as "boxing".
//Unfortunately, explicit binding alone still doesn't offer any solution to the issue mentioned previously, of a 
//function "losing" its intended this binding, or just having it paved over by a framework, etc.



//||\\//||\\//||\\
// HARD BINDING

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2
var a=5;
// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2, means hard binding will not let override obj a to global a



//The most typical way to wrap a function with a hard binding creates a pass-thru of any arguments passed and any return value received
function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = function() {
	//here 3 arguments me chala gaya and obj as this reference pass ho gaya
	return foo.apply( obj, arguments );//apply takes array as argument, while call takes each argument
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5


// Since hard binding is such a common pattern, it's provided with a built-in utility as of ES5: Function.prototype.bind, and it's used like this:

function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = foo.bind( obj );//matlab ES5 comes with cool stuff, bind that do hard binding

var b = bar( 3 ); // 2 3
console.log( b ); // 5

//How do these utilities work? They both take, as their first parameter, an object to use for the this, and then invoke the function with that this specified
//Invoking foo with explicit binding by foo.call(..) allows us to force its this to be obj



//Another way to express this pattern is to create a re-usable helper:

function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

// simple `bind` helper
function bind(fn, obj) {
	return function() {
		return fn.apply( obj, arguments );
	};
}

var obj = {
	a: 2
};

var bar = bind( foo, obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5



//Since hard binding is such a common pattern, it's provided with a built-in utility as of ES5: Function.prototype.bind, and it's used like this:

function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5

//bind(..) returns a new function that is hard-coded to call the original function with the this

//Note: As of ES6, the hard-bound function produced by bind(..) has a 
//.name property that derives from the original target function. For example: bar = foo.bind(..) 
//should have a bar.name value of "bound foo", which is the function call name that should show up in a stack trace.


//API Call "Contexts"

//Many libraries' functions, and indeed many new built-in functions in the JavaScript language and host environment, 
// provide an optional parameter, usually called "context", which is designed as a work-around for you not having to use bind(..) 
// to ensure your callback function uses a particular this.

function foo(el) {
	console.log( el, this.id );
}

var obj = {
	id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
//below second parameter is context
[1, 2, 3].forEach( foo, obj ); // 1 awesome  2 awesome  3 awesome

