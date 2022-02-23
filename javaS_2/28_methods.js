//we get value of this always on run time, not while coding

//this is obect which is calling current function
//this is an object
"use strict";
function personInfo(){
    //In JavaScript, the this keyword refers to an object.
    //this keyword refers to different objects depending on how it is used:
    //In a function, the global object is the default binding for this.
console.log(`name is ${this.name} and age is ${this.age}`);
console.log(this);
}

const person  = {
    name: 'abdjjd',
    age: 34,
    about: personInfo
}


const person1  = {
    name: 'dsdfsds',
    age: 22,
    about: personInfo
}
person.about();
person1.about();