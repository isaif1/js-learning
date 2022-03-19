//Now, we can summarize the rules for determining this from a function call's call-site, in their order of precedence.
//Ask these questions in this order, and stop when the first rule applies.

// Is the function called with new (new binding)? If so, this is the newly constructed object.

// var bar = new foo()

// Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.

// var bar = foo.call( obj2 )

// Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.

// var bar = obj1.foo()

// Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.

// var bar = foo()

///If you pass null or undefined as a this binding parameter to call, apply, or bind, 
//those values are effectively ignored, and instead the default binding rule applies to the invocation.

//Binding Exceptions
function foo() {
	console.log( this.a );
}

var a = 2;

foo.call( null ); // 2

//Why would you intentionally pass something like null for a this binding?

//It's quite common to use apply(..) for spreading out arrays of values as parameters to a function call. Similarly,
// bind(..) can curry parameters (pre-set values), which can be very helpful.

function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

// spreading out array as parameters
foo.apply( null, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( null, 2 );//
bar( 3 ); // a:2, b:3
//Both these utilities require a this binding for the first parameter.

//ES6 has the ... spread operator which will let you syntactically "spread out" an array as parameters without needing apply(..), 
//such as foo(...[1,2]), which amounts to foo(1,2) -- syntactically avoiding a this binding if it's unnecessary.

//there's no ES6 syntactic substitute for currying, so the this parameter of the bind(..) call still needs attention.

//Safer this
function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

// our DMZ empty object
var ø = Object.create( null );//this is (de-militarized zone) object 
//Object.create(null) is similar to { }, but without the delegation to Object.prototype, so it's "more empty" than just { }

// spreading out array as parameters
foo.apply( ø, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( ø, 2 );
bar( 3 ); // a:2, b:3


//Indirection
function foo() {
	console.log( this.a );
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };

o.foo(); // 3
(p.foo = o.foo)(); // 2



//We can construct a so-called soft binding utility which emulates our desired behavior.

if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this,
			curried = [].slice.call( arguments, 1 ),
			bound = function bound() {
				return fn.apply(
					(!this ||
						(typeof window !== "undefined" &&
							this === window) ||
						(typeof global !== "undefined" &&
							this === global)
					) ? obj : this,
					curried.concat.apply( curried, arguments )
				);
			};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}



// The softBind(..) utility provided here works similarly to the built-in ES5 bind(..) utility, except with our soft binding behavior.
// It wraps the specified function in logic that checks the this at call-time and if it's global or undefined, uses a pre-specified alternate default (obj). 
//Otherwise the this is left untouched. It also provides optional currying (see the bind(..) discussion earlier).

//Softwa Binding Demostration

function foo() {
    console.log("name: " + this.name);
 }
 
 var obj = { name: "obj" },
     obj2 = { name: "obj2" },
     obj3 = { name: "obj3" };
 
 var fooOBJ = foo.softBind( obj );
 
 fooOBJ(); // name: obj
 
 obj2.foo = foo.softBind(obj);
 obj2.foo(); // name: obj2   <---- look!!!
 
 fooOBJ.call( obj3 ); // name: obj3   <---- look!
 
 setTimeout( obj2.foo, 10 ); // name: obj   <---- falls back to soft-binding



 //LEXICAL THIS

 //Normal functions abide by the 4 rules we just covered. But ES6 introduces a special kind of function that does not use these rules: arrow-function.
 //Instead of using the four standard this rules, arrow-functions adopt the this binding from the enclosing (function or global) scope.

 function foo() {
	// return an arrow function
	return (a) => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	};
}

var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};

var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, not 3!

//The lexical binding of an arrow-function cannot be overridden (even with new!).


function foo() {
	setTimeout(() => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	},100);
}

var obj = {
	a: 2
};

foo.call( obj ); // 2

///lexical capture of this
function foo() {
	var self = this; // lexical capture of `this`
	setTimeout( function(){
		console.log( self.a );
	}, 100 );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2

