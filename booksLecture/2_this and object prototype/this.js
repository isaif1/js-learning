// It's a special identifier keyword that's automatically defined in the scope of every function

function identify() {
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
	console.log( greeting );
}

var me = {
	name: "Kyle"
};

var you = {
	name: "Reader"
};

identify.call( me ); // KYLE
identify.call( you ); // READER

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER

//This code snippet allows the identify() and speak() functions to be re-used against multiple context (me and you) objects,
// rather than needing a separate version of the function for each object.






//above thing can be done like below also
//However, the this mechanism provides a more elegant way of implicitly "passing along" an object reference, leading to cleaner API design and easier re-use.

function identify(context) {
	return context.name.toUpperCase();
}

function speak(context) {
	var greeting = "Hello, I'm " + identify( context );
	console.log( greeting );
}

identify( you ); // READER
speak( me ); // Hello, I'm KYLE




//\\//\\//\\/\\/\/\/\/\\/\/\/\/\/\\/\/\/\/\/\/\/

//here foo function ka object is different than this
//this ka count increase kr rhe ho and foo ka count increase kr rhe ho
// that is why it is confusing
function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );//or instead we can use foo.call(foo,i), passing foo references
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( this.count ); // 0 -- WTF?

//even if you are increasing this.count then at last you want to see those value then it will show NaN
//so instead of understanding this behavior, some developer creates new object and store count in it like below.

function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	data.count++;
}

var data = {
	count: 0
};

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( data.count ); // 4

//To be clear, this does not, in any way, refer to a function's lexical scope. 
//It is true that internally, scope is kind of like an object with properties for each of the available identifiers.
// But the scope "object" is not accessible to JavaScript code. It's an inner part of the Engine's implementation.


//We said earlier that this is not an author-time binding but a runtime binding. 
//lexical scope is author time binding
//this binding has nothing to do with where a function is declared, but has instead everything to do with the manner in which the function is called.
//this is a binding made for each function invocation, based entirely on its call-site (how the function is called).