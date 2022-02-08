//SETS
// sets are iterable
// no duplicate Items
// it has own methods
// order is not gauranty

const numbers = new Set('dsjhcibadkejkeaue');
// const numbers = new Set([1,2,3,43,3]);
if(numbers.has('3441'))console.log("hello");
console.log(numbers);
numbers.add([3441]);
numbers.add([3441]);//this array and above array will be treated as different since they have different address
console.log(numbers);




//set is iterable

for(let item of numbers){
    console.log(item);
}

//there is no length property for it
const arr = [1,1,2,2,3,3,4,5,6,7];
console.log(new Set(arr));