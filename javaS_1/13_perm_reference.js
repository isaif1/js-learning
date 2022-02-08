//primitive vs reference type

//here they are sharing different memory address, so change in one will not reflect in other
let a = 5;
let b = a;
a++;
console.log(a,b); //here both number are different 


//change in one will reflect in other also, because they are sharing same memory address
let arr1 = ["item1","item2"];
let arr2 = arr1; //here array is in the heap memory and both are sharing address of that memory address
arr2.push("item3");
console.log(arr1);
console.log(arr2);