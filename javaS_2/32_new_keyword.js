
//if we want to use new keyword then start function name with capital
function CreateUser(name,age){
    //it will create a free space this = {}
    //also return this {}
    //this will done by new keyword
    //const user = Object.create(createUser.prototype); //userM will be in the prototype
    this.name = name;
    this.age = age;
}

//instead of creating another mothod, we can use same free space that is object
CreateUser.prototype.about = function(){
    return `name is ${this.name} and age is ${this.age}`;
}

CreateUser.prototype.singSong = function(){
    return `${name} is singing song to na na`;
}
const user1 = new CreateUser('harshit',23);
const user2 = new CreateUser('harshita',22);
console.log(user1.about());

for(let key in user1){
    //console.log(key); //prototype ka keys bhi batayega

    if(user1.hasOwnProperty(key)){
        console.log(key); 
    }
}


//array has prototype property because
let arr = [1,2,3];//internally new Array(), because of new prototype will be there
// arr has many peoperties because of this only
// methods are there only which have prototype properties
//like array has length, empty, extc propertirs

console.log(Array.isArray(Object.getPrototypeOf(arr)));
console.log(Array.prototype);


//now ES6 have class keywords
//we will use that instead of writing function as constructor
