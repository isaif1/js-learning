//we get value of this always on run time, not while coding

//this is obect which is calling current function
//this is an object

function personInfo(){
console.log(`name is ${this.name} and age is ${this.age}`)
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