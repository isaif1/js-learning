//unlike C++ any ddata type can be stored in the array
//array is reference type
//array can also be called as object
let mixed = ["but","boys","played","well",1,2,3,undefined,null,false];
console.log(typeof mixed);
console.log(Array.isArray(mixed));

let fruits = ["mango","banana","grapes"];
console.log(fruits);
fruits.push("pineapple");
console.log(fruits);
console.log(fruits.pop());//pop return a value

//unshift, start me element add kr dega
fruits.unshift("pineApple");
console.log(fruits);



//shift, will remove element from start, will also return first return element
console.log(fruits.shift());
let obj = {}//object literal