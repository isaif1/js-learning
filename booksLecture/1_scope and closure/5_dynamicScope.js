function foo() {
	console.log( a ); // 2
}

function bar() {
	var a = 3;
	foo();
}

var a = 2;

bar();


//if dynamic scope is there then this result would be different
//if there is dynamic scope then
//if JavaScript had dynamic scope, when foo() is executed, theoretically the code below would instead result in 3 as the output.
//How can this be? Because when foo() cannot resolve the variable reference for a, instead of stepping up the nested (lexical) scope chain, it walks up the call-stack, to find where foo() was called from. 
//Since foo() was called from bar(), it checks the variables in scope for bar(), and finds an a there with value 3.
function foo() {
	console.log(a); // 3  (not 2!)
}

function bar() {
	var a = 3;
	foo();
}

var a = 2;

bar();

//To be clear, JavaScript does not, in fact, have dynamic scope. It has lexical scope. Plain and simple.
// But the this mechanism is kind of like dynamic scope.

// The key contrast: lexical scope is write-time, whereas dynamic scope (and this!) are runtime.
//  Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from.

// this cares how a function was called, which shows how closely related the this mechanism is to the idea of dynamic scoping