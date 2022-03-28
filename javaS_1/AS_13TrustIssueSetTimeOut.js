// setTimeout with time 5 second may not call eaxalty after 5 second, it may take long
//this is called concurrency model in JS

//Don't Block your main thread, means call stack
//callback queue cannot be seen  int the developer console

//let's block main thread for 10 seconds

console.log('start');

setTimeout(function a(){  //it will have to wait for min 5 second, max can be anything depends on main thread block
console.log('inside the function');
},5000);


let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate+ 10000){  //this will block the main thread for 10 seconds
  endDate = new Date().getTime();
}


console.log('end');


//that is why settimeout has trust issue

//why put 0 seconds in the setTimeOut
//suppose you want to defer something

console.log('start');

function a(){ //we want this code to be executed after all execution of the code
    console.log('inside the function');
    }
setTimeout(a,0);// that is why we have put 0 second so that it could be defer
//we need this concurrency model because js is synchronous single threaded language
console.log('end');