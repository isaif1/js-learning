//getters and setters
//if we want method of class to work like properties are we access it without calling then 
//use getter
//if we want to set method properties then use set
//now method will treat as property


class CreateUser{
    constructor(name,age){
    this.name = name;
    this.age = age;
}

static classInfo(){
    return "hey from CreateUser class";
}

static number = 55;
    get about (){
        return `name is ${this.name} and age is ${this.age}`;
    }
  //using this method we can change properties
    setName(name,age){
        this.name = name;
        this.age = age;   
    }

   set setprop(prop){
      const [name,age] = prop.split(" ");
      this.name = name;
      this.age = age;
    }
}


const user1 = new CreateUser('harshit',23);
const user2 = new CreateUser('harshita',22);
console.log(user1.about); //here we are accessing it as property
//method 1
// user1.name = "newName";
// user1.age = 43;
//method 2
// user1.setName("newName",43);

//method 3
user1.setprop = "newName 55";
console.log(user1.about); 

//static properties are class properties, not object peoperties
//we can dire tly access them using class name
console.log(CreateUser.classInfo());
console.log(CreateUser.number);
