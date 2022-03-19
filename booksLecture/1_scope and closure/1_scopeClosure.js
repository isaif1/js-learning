// storing variables in some location, and for finding those variables at a later time. We'll call that set of rules: Scope.
// In a traditional compiled-language process, a chunk of source code, your program, 
// will undergo typically three steps before it is executed, roughly called "compilation":
//parsing tree is called abstract syntax tree
//For JavaScript, the compilation that occurs happens, in many cases, mere microseconds (or less!)
//JS compiler will take the program var a = 2; and compile it first, and then be ready to execute it, usually right away.
// Engine: responsible for start-to-finish compilation and execution of our JavaScript program.

// Compiler: one of Engine's friends; handles all the dirty work of parsing and code-generation (see previous section).

// Scope: another friend of Engine; collects and maintains a look-up list of all the declared identifiers (variables), 
//and enforces a strict set of rules as to how these are accessible to currently executing code.
//Compiler asks Scope to declare a new variable called a for that scope collection

// To summarize: two distinct actions are taken for a variable assignment: First, Compiler declares a 
// variable (if not previously declared in the current scope), and second, when executing, Engine looks up the variable in Scope and assigns to it, if found.

//Just as a block or function is nested inside another block or function, scopes are nested inside other scopes
// So, if a variable cannot be found in the immediate scope, Engine consults the next outer containing scope, 
// continuing until found or until the outermost (aka, global) scope has been reached.

function foo(a) {
	console.log( a + b );
}

var b = 2;

foo( 2 ); // 4

// Scope is the set of rules that determines where and how a variable (identifier) can be looked-up. 
// This look-up may be for the purposes of assigning to the variable, 
// which is an LHS (left-hand-side) reference, or it may be for the purposes of retrieving its value, which is an RHS (right-hand-side) reference.



//So there are two types of scope, lexical scope and dynamic scope, majority of the time we use lexical scope only

//LEXICAL SCOPE

// lexical scope is scope that is defined at lexing time,
//In other words, lexical scope is based on where variables and blocks of scope are authored, by you, at write time

function foo(a) {

	var b = a * 2;

	function bar(c) {
		console.log( a, b, c );
	}

	bar(b * 3);
}

foo(2); // 2 4 12

// Bubble 1 encompasses the global scope, and has just one identifier in it: foo.
// Bubble 2 encompasses the scope of foo, which includes the three identifiers: a, bar and b.
// Bubble 3 encompasses the scope of bar, and it includes just one identifier: c.

//Global variables are also automatically properties of the global object (window in browsers, etc.)


//cheating lexical scope
function foo(str, a) {
    //The string "var b = 3;" is treated, at the point of the eval(..)
    //code actually creates variable b inside of foo(..) that shadows the b that was declared in the outer (global) scope
	eval( str ); // cheating,point of evaluation
	console.log( a, b );
}

var b = 2;
foo( "var b = 3;", 1 ); // 1 3
//generally eval does this eval('2 + 2') will result is 4
//it takes a string eval(string)
//eval() is a function property of the global object.
//If you construct an arithmetic expression as a string, you can use eval() to evaluate it at a later time.
//recomended to not use eval


function foo(str) {
    "use strict";
    eval( str );//it evaluate expressions
    console.log( a ); // ReferenceError: a is not defined
 }
 
 foo( "var a = 2" );
//  Strict mode makes several changes to normal JavaScript semantics:
//in strict mode if you try to use some library name as variable then it will show error
//  Eliminates some JavaScript silent errors by changing them to throw errors.
//  Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
//  Prohibits some syntax likely to be defined in future versions of ECMAScript

 // feature in JavaScript which cheats lexical scope is the with keyword

 var obj = {
	a: 1,
	b: 2,
	c: 3
};

// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;

// "easier" short-hand
with (obj) {
	a = 3;
	b = 4;
}

console.log(obj);
//with example
//Both eval(..) and 'with' cheat, author-time defined lexical scope by modifying or creating new lexical scope at runtime.


function foo(obj) {
	with (obj) {
		a = 2;
	}
}

var o1 = {
	a: 3
};

var o2 = {
	b: 3
};

foo( o1 );
console.log( o1.a ); // 2

foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2 -- Oops, leaked global!