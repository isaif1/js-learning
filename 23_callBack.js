function a(name) {
    console.log("hello I am call_back function");
    console.log(`my name is ${name}`);
}

function b(call_back) {
    console.log("hello I am from function b");
    //here we are passing hardcode data, but this can be come from database
    call_back('rohit');
}

//here a is callback function
//function which is passed as an argument in another function
b(a);

//mostly asynchronous programming me use krte hain



//function returning function

function func(){
    function innerFunc(){
        return "hello world";
    }
    return innerFunc;
}

//func()//it will take function in return
//func()() //this will call function that is return
console.log(func()());
//if some function is either taking function as input or returning a function
//then it is called higher order function