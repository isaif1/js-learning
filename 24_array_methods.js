// function multiply(value,index){
//     console.log(`number is ${value} and index is ${index}.`);
// }

 let arr = [1,2,3,4,5];

// //it takes callback function
// arr.forEach(multiply); //it will pass each value and index
// arr.forEach(value=>{ //index is optional
//     console.log(`number is ${value*2}`);
// })


//MAP

// const square = num=>{
//     return num*num;
// }

// // let newArray =  arr.map(square);
// let newArray = arr.map(num=>num*num);
// console.log(newArray);



//FILTER
// const even = num=>{
//     return num%2===0;
// }
// let evenNumber = arr.filter(even);
// console.log(evenNumber);


//REDUCE, it gives one value after reducing it

let sum = arr.reduce((accumulator,value)=>{
    console.log(accumulator,value);
    //last return value will be of accumulator value
    return accumulator+value;
    //we can pass initial accumulator value
},0)

console.log(sum);


//SORT METHOD

