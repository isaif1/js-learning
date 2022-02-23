//classes are fake in javascipt

class CreateUser{
    constructor(name,age){
    this.name = name;
    this.age = age;}

    about = function(){
        return `name is ${this.name} and age is ${this.age}`;
    }

    singSong = function(){
        return `${name} is singing song to na na`;
    }
     
}


const user1 = new CreateUser('harshit',23);
const user2 = new CreateUser('harshita',22);
console.log(user1.about());
//here it is not direct function , so we will use getPrototypeOf instead
//of user1.prototype
console.log(Object.getPrototypeOf(user1));


//INHERITANCE

//user is subclass and Createuser is base/parent class
class User extends CreateUser{
 constructor(name,age,school){
     super(name,age);//send property that can be handle by parent class
     this.school = school;
 }

 school = function(){
  return `school of ${this.name} is ${this.school}`;
 }
}
const user = new User('hari',23,'mtm school');

console.log(user.school);//if method is find in child class then if not found then it will search for parent class
console.log(user.name);