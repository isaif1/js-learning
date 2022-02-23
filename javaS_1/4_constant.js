//const cannot be change if declare once.
//also have only block scope
// As a general rule, always declare a variable with const unless you know that the value will change.

// Use const when you declare:
// A new Array
// A new Object
// A new Function
// A new RegExp
const a = 0.5;
console.log(a);
// a=00; not allowed
//if const is some object then values inside it can be change, but not whole const


const obj = {
    name: 'john',
    midName: 'd'
}

console.log(obj.name);
obj.name = 'marry'; //allowed

console.log(obj.name);


//not allowed
// obj = {
//     name:'abc',
//     midName:'xyj'
// }