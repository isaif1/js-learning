
function createUser(name,age){
    const user = Object.create(createUser.prototype); //userM will be in the prototype
    user.name = name;
    user.age = age;
    return user;
}

//instead of creating another mothod, we can use same free space that is object
createUser.prototype.about = function(){
    return `name is ${this.name} and age is ${this.age}`;
}

createUser.prototype.singSong = function(){
    return `${name} is singing song to na na`;
}
const user1 = createUser('harshit',23);
const user2 = createUser('harshita',22);
console.log(user1.about());