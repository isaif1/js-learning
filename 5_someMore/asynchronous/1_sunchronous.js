// console.log("start");
//js is synchronous and single threaded language
//below code will block last console
// for(let i=0;i<10000;i++){
//     console.log("hey printing");
// }

// console.log('end');


// setTimeOut take input as function duration after which it will call
//setTimeOut is provided by browser
// console.log("start");
// setTimeout(()=>{
//     console.log("inside setTimeOut!");
// },1000);

// for(let i=0;i<100;i++){
//     console.log("hey printing");
// }
// console.log('end');


// start
//end
//inside setTimeOut

//how it is showing above output
//so code execute one by one line and setTimeOut mmoves to Web API,
//code will continue executing untill last
//when settimeout will end in the web api then it will be send to callback queue
//nnow event loop checks if it is free and move to call stack
//but settimeout is not blocking code
//this is asynchronous programming

//setTimeOut returns an id
const id = setTimeout(()=>{
    console.log("......");
},1000);
console.log(id);
console.log('clearing timeOut');
clearTimeout(id);//I don't want to run function inside setTimeOut

//setTimeOut is asynchronous

