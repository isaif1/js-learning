//using template string to get value from variable

let name = "saif";
let arr = new Array(26).fill(0);
for(let c in name){
    arr[c-'a']++;
    console.log(c-"a");
}
let age = 23;

let concatMe = "My name is " + name + "and my age is " + age;
console.log(concatMe);

//using template string to get value from variable
let aboutMe = `my name is ${name} and my age is ${age}.`;
console.log(aboutMe);

let myvar;
console.log(typeof myvar);
myvar = "a";
console.log(typeof myvar);

myvar = null;
console.log(typeof myvar);//this will be object, it is js bug
//they are not fixing because some cdebase already have been written

//BigInt
//max safe integer is 9007199254740991, so we use big int now
console.log(Number.MAX_SAFE_INTEGER);
let num = BigInt(550);
console.log(num + 5n);

