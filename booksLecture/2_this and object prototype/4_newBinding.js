// JavaScript has a new operator, and the code pattern to use it looks basically identical to what we see in those class-oriented languages; 
// most developers assume that JavaScript's mechanism is doing something similar. 
// However, there really is no connection to class-oriented functionality implied by new usage in JS.


//In JS constructors are just functions that happen to be called with the new operator in front of them. 
// They are not attached to classes, nor are they instantiating a class. They are not even special types of functions. 
// They're just regular functions that are,

//Number(..) (see Chapter 3) can be called with new in front of it,

// When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:

// a brand new object is created (aka, constructed) out of thin air
// the newly constructed object is [[Prototype]]-linked
// the newly constructed object is set as the this binding for that function call
// unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2



//the above is called new binding
//By calling foo(..) with new in front of it, we've constructed a new object and set that new object as the this for the call of foo(..)

function foo() {
	console.log( this.a );
}

var obj1 = {
	a: 2,
	foo: foo
};

var obj2 = {
	a: 3,
	foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call( obj2 ); // 3
obj2.foo.call( obj1 ); // 2

//So, explicit binding takes precedence over implicit binding, 
//which means you should ask first if explicit binding applies before checking for implicit binding.


function foo(something) {
	this.a = something;
}

var obj1 = {
	foo: foo
};

var obj2 = {};

obj1.foo( 2 );
console.log( obj1.a ); // 2

obj1.foo.call( obj2, 3 );
console.log( obj2.a ); // 3

var bar = new obj1.foo( 4 );  //precedence new Binding > explicit binding > implicit binding
//we will talk about hard binding, if it has more precedence than new binding
console.log( obj1.a ); // 2
console.log( bar.a ); // 4
//hard biinding do this physically work using Function.prototype.bind(..) 



function foo(something) {
	this.a = something;
}

var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2

var baz = new bar( 3 );//this will be newly created value, and it will not override hard binding
console.log( obj1.a ); // 2
console.log( baz.a ); // 3
//Whoa! bar is hard-bound against obj1, but new bar(3) did not change obj1.a to be 3 as we would have expected


//But the built-in Function.prototype.bind(..) as of ES5 is more sophisticated, quite a bit so in fact. 
//Here is the (slightly reformatted) polyfill provided by the MDN page for bind(..)


if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== "function") {
			// closest thing possible to the ECMAScript 5
			// internal IsCallable function
			throw new TypeError( "Function.prototype.bind - what " +
				"is trying to be bound is not callable"
			);
		}

		var aArgs = Array.prototype.slice.call( arguments, 1 ),
			fToBind = this,
			fNOP = function(){},
			fBound = function(){
				return fToBind.apply(
					(
						this instanceof fNOP &&
						oThis ? this : oThis
					),
					aArgs.concat( Array.prototype.slice.call( arguments ) )
				);
			}
		;

		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();

		return fBound;
	};
}

//matlab above function will see if there is hard bind then it will create new objects and use 'this' of this object without overriding it
//do not try to understand it above code more in deep
//above function is called polyfill
// Tread carefully if you plan to use new with a hard-bound function and you rely on this polyfill.

function foo(p1,p2) {
	this.val = p1 + p2;
}

// using `null` here because we don't care about
// the `this` hard-binding in this scenario, and
// it will be overridden by the `new` call anyway!
var bar = foo.bind( null, "p1" );

var baz = new bar( "p2" );

baz.val; // p1p2