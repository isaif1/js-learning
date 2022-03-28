//map filter reduce is used to transform an array

const arr = [1,2,3,4,5];


//map, it takes a callback function
const output = arr.map(x=>2*x);
console.log(output);
console.log(arr.map(x=>x.toString(2)));


//filter used to filter value inside the array

function isOdd(x){
    return x%2;
}

console.log(arr.filter(isOdd));
console.log(arr.filter(x=>x%2));
console.log(arr.filter(x=>x<4));

//Reduce , you take whole element as array and come up with single value
//first tey to use non functional way, how we will doing without using reduce

function getSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(getSum(arr));
//cur is the current value of the array
console.log(arr.reduce((acc,cur)=>{
    acc+=cur;
    return acc;
},0));//this is initialization of the accumulator


//find the max in arr
console.log(arr.reduce((max,cur)=>{
  if(max<cur)max=cur;
    return max;
}),0);//this is initialization of the accumulator


//we can chain map, filter and reduce

const users = [
    {firstname:'akshay', lastname:'shaini',age:26},
    {firstname:'elon', lastname:'musk',age:50},
    {firstname:'donald', lastname:'trump',age:75},
    {firstname:'deepika', lastname:'padukone',age:26},
]

//get full name of all the users

console.log(users.map(x=>x.firstname+" "+x.lastname));

//list out the age with frequency

console.log(users.reduce((acc,cur)=>{
if(acc[cur.age])++acc[cur.age];
else acc[cur.age]=1;
return acc;
},{}));

//find first name whose age is less than 30

const outpt = users.filter(x=>x.age<30)
.map(x=>x.firstname);
console.log(outpt);

//above question using reduce

console.log(users.reduce((acc,curr)=>{
    if(curr.age<30)acc.push(curr.firstname);
    return acc;
},[]));

