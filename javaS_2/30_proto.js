// __proto__ is same as [[prototype]]
//prototype is different


const obj1 = {
    name:'djkksd',
    age:23
}

//here we are setting obj2 proto to obj1
//if somethis is not present in the obj2 then will search in its __proto__ that is obj1

const obj2 = Object.create(obj1);
obj2.sing = true;
console.log(obj2.sing);
//prototype chaining
console.log(obj2.__proto__); 
console.log(obj2); 



// const userM = {
//     about: function(){
//         return `name is ${this.name} and age is ${this.age}`;
//     },

//     singSong: function(){
//         return `${name} is singing song to na na`;
//     },
// }

// function createUser(name,age){
//     const user = Object.create(userM); //userM will be in the prototype
//     user.name = name;
//     user.age = age;
//     return user;
// }

// const user1 = createUser('harshit',23);
// const user2 = createUser('harshita',22);
// console.log(user1.about());

// javascript function = object + function

function hello(){
    console.log("abc");
}

hello.myprop = "xajsjsj";
console.log(hello.myprop); //it will give use free space that is object, called prototype

//function gives free space is called prototype
//prototype is an object
console.log(hello.prototype);
//only function provide prototype property

