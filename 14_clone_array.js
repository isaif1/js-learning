//ways of cloning array

let arr1 = ["item1", "item2"]
//let arr2 = arr1.slice(0);//method 1
// let arr2 = [].concat(arr1); //method 2
//let arr2 = [...arr1]; //method 3
//console.log(arr1===arr2);

//concat array

// let arr2 = arr1.slice(0).concat(["item3","item4"]);
//let arr2 = [].concat(arr1,["item3","item4"]);
// let arr2 =[...arr1,'item3','item4'];
// let moreItems = ["item5",'item6'];
// arr2 = [...arr2,...moreItems];
// console.log(arr2);

const arr2 = ["a1", 's2', 'd3'];
arr2.push('aaa');//allowed, because memory address is not being change
// arr2 = ["sjsj"]//not allowed because address is being change
console.log(arr2);

//for of loop in the array, until length
//try to write array name in the plural, and use key as singular
for (let arr of arr2) {
    console.log(arr);
}

for (let index in arr2) {
    console.log(arr2[index]);
}


//array destructuring
const myArr = ["item1", "item2"];

let [myvar1, myvar2, myvar3] = myArr;
console.log(myvar1, myvar2, myvar3); //3rd is undefined because there is only two array in the array
//I want only value 1 and 3
myArr.push("item3");
// let [a1,,a1] = myNewArray;
let [a1,a2,...myNewArray] = myArr; //rest of the array will be in the myNewArray

console.log(myNewArray);