//Js is synchronous single threaded language, it has one stack and it can do only one thing a t a time
//Call stack is present inside the javascript engine
//when any code is run then a global execution context is created and pushed inside the call stack

function a(){
console.log('a');
}

a();//for this function one more execution context will be create and pushed into call stack
// and when it will execute then, after below code will be execute
//after function run, then function execution context will be removed
console.log('a');//this will be execute in the global execution context

//main job of call stack is to execute, quickly execute it
//so settime out will not sent in the call stack directly,
//it will sent only after some delay



//JS Engine is a part of the Browser, and call stack is a part of JS Engine

//browser has, timer, http, blutooth, location, everything, local storage so many things
//JS Engine can ask anything from browser
//JS engine/ can access these things from Web API

// Web API has
// setTimeout
// DOM API
// fetch()   it gives us to make connection to another domain
// localStorage
// console
// location

//all the above are web API's
//we get all those thing using global object window
//JS engine can access these things using window
console.log(window.localStorage);



console.log('start');

setTimeout(function a(){
console.log('inside the function');
},5000);

console.log('end');

//setTimeOut is web api, it will be send in the timer for 5 second,
//when 5 second done then it needs to be send in the call stack to immediately execute it.
//here event loop comes into the picture


//well
//when we use setTimeOut then it is web api and when the timer is over then 
//this call back function is pushed into CALL BACK QUEUE
//event loop ontinously checks if call stack is free or not, if call stack is free then 
//this event loop takes callback function from callback queue and push it into call stack

//whenever we acccess some dom api then it fetches DOM from html

console.log('start');

document.getElementById('btn')
.addEventListener('click',function a(){
    console.log('hello logging after click');//this event listener register a call back, and attaches the event handeller 'click'
    //in future if someone is clicking on this then it will be activate
    //then inside web api environment a call back wil be registered, since it will not taking time, so directly pushed it into the callback queue
})

console.log('end');

//when all code is execute, now we have event listener in the web api environment
//this will be remain in there until we remove it explicitly or close the browser

//whenever someone clicks on this event listener in future then callBack will be pushed into callback queue

//Event Loop continously checks the callback queue and call stack

//web api FETCH works differently, it will use to make a network call
// fetch wait for the data to revert from server
//here comes microtask queue in the picture, function inside it will be execute before call back queue
//fetch callback function will go in the callback queue

//all the callback function that comes through promises and mutation observer will go into Microtask Queue

//read about Mutation Observer
//callback queue also known as task queue
// suppose there are 3 microtask queue and 1 in call back, then all 3 microtask will be completed

//case
//suppose microtask is creating another microtask and that creating another microtask then call back will not be given chance to execute
//this is called callback starvation, this is possible