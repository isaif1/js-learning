//even though your file is empty your js engine will be working lots of thing
//it will still create GEC
//it will also create window, functions and variables are created inside this window object
//JS engine also create this object
// for global this===window
//JS runs on server, browser and lots of other places and devides
//JS engine will be always there wherever JS is running
//JS engine responsibility is to create window, it may be different for node and other servers

console.log(this===window);
console.log(window);
//for all execution context this is created whether it is GEX or FEC

//anything that is in the global space, will be attack to the global onject
//if you do not put anyhting in front of a it will suppose to window
// window.a===a
//this.a==a
//these all are refering to the same place of memory space


//\\//\\//\\//\\//\\//\\//\\//\\//\//\\\//\\/\///\/\///\//\/\

// UNDEFINED AND NOTDEFINED IN JS

console.log(a)//undefined

var a=7;

console.log(x);//reference error not defined

//undefined is not equal to empty

var b;//for this accessing inside whole programm it will be undefined

console.log(c==undefined);

//JS is a loosely/weakly typed language
//it means it is not attached to the specific data type, data type can be modify
//we cam put boolean , string, int in the same variable

var c=1;
console.log(c);

var c = 'hey there!';
console.log(c);

//it handles lots of things behind the scene, flexible and beautiful

// a=undefined //this should not be done by us, because it is for specific purpose
