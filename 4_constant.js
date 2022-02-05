//const cannot be change if declare once.
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