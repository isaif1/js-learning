//object destructuring

const band = {
    name: 'numaan',
    age: 34,
    year:2022,
    address: 'none'
}

// const {name,age} = band;
// console.log(name,age);

//if we want to name something else apart from object keys,
//then do like this var1,var2 will create
const{name:var1, age:var2,...restProps} = band;
console.log(var1,var2);
console.log(restProps); //rest of the array here


//object in the array, very useful in the real life

let myArr = [
    {id:1,name:'rahul',age:22},
    {id:2,name:'shusheel',age:20},
    {id:3,name:'chaitanya',age:21},
]

// for(let item of myArr){
//     console.log(item);
// }


//nested destructuring
const [{name:userName},,{age}]=myArr;//extract name of first element and age of third element
console.log(userName,age);