//to store real world data we definitely need objects
//it contains key-value pairs
//it is also reference type

const person = {
    name:'abc',
    'age':23,
    hobbies:['code','eat','sleep']
}

console.log(person.hobbies);
person.gender = 'male';
console.log(person['gender']); //by default key string me hoti hain

person['address']="unknown";

// I have to take key from variable, use bracket instead of dot
const key = 'email';//ye wali key mujhe person onject me dalni hai
person[key] = 'a@b.com';

console.log(person);

// so dot notation me key kisi variable se ni le skte, bracket me le skte hain


//iterate object
//for in
//object.keys

for(let key in person){
    // console.log(person[key]);
    console.log(`${key}:${person[key]}`);
}


//Object.keys
for(let key of Object.keys(person)){
    console.log(person[key]);
}