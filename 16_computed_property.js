let key1 = "objkey1";
let key2 = "objkey2";

let value1 = "myvalue1";
let value2 = "myvalue2";

//this will work
// const obj = {
//     [key1]:value1,
//     [key2]:value2
// }

//this will also works
const obj = {}
obj[key1]=value1;
obj[key2]=value2;

console.log(obj);


//spread operator
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let newArray = [...arr1,...arr2];
// console.log(newArray);
// console.log(..."abcd"); //it will iterate all the element in this string


const obj1 = {
    key1:'val1',
    key2:'val2'
}

const obj2 = {
    key1:'val',
    key3:'val3'
}

const localeObject = {...obj1,...obj2}; //key1 of 2nd object will replace key1 of first object
console.log(localeObject);


console.log({..."abc"});