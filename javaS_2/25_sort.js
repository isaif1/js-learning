//for any array sort element asuming string and sort like that

let arr = [2, 11, 43, 344];
// then sorted array will be, and follow ascii code for sorting
//it sort same array
console.log(arr.sort()); //11 2 344 43

//so sorting string would be easy in this case

console.log(arr.sort((a, b) => a - b)); //how it is working

const products = [
    { id: 1, name: 'p1', price: 20 },
    { id: 2, name: 'p2', price: 120 },
    { id: 3, name: 'p3', price: 5 },
    { id: 4, name: 'p4', price: 16 },
]
let lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
console.log('price sort',lowToHigh);



//FIND METHOD

const array = ["cat", "dog", "aaaa", "dksjhkdh"];

const isLength3 = (str) => str.length === 3;

//it also takes callback function
console.log(array.find(isLength3)); //it will give only first occurance
 
 

//EVERY METHOD

// check in the array if every nukber is even
//every method will return true only when all element will return true
console.log(arr.every(num=>num%2 )); //it will return false


//SOME METHOD
//is any element satisfies the condition, then it will return true
//if any number is odd in this
console.log(arr.some(num=>num%2 )); //it will return true



//FILL METHOD
//suppose we have to fill an array with every element -1 of size 10

//const myArray = new Array(10).fill(-1);
// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,5);
// console.log(myArray);




//SPLICE METHOD
//start, delete, insert
const myArray = ['item1','item2','item3'];
//delete
let deletedItems = myArray.splice(1,1);//start from index 1 and delete 1 item, it will return deleted value also
console.log(myArray,deletedItems);

//insert
myArray.splice(1,0,'item4');//start from 1 and delete 0 items and insert item4
console.log(myArray);



// iterable
// only array and strings are iterable

//array like object
//string is array like object