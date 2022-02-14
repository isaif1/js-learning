console.log('start');
const allButtons = document.querySelectorAll("button");


allButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let num = 0;
        for(let i=0;i<100000000;i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent,num);
    })
})

let num = 0;
for(let i=0;i<100000000;i++){
    num+=i;
}

console.log(num);
console.log('end');

//WORKING UNDERSTAND
/*
browser has JS Engine and Web API
JS Engine has call stack, Global Execution Context
Web API takes care of all events, when event clicked by user, this call back function
move to the callBack-queue that is handled by event loop.
now event loop keep checking if call stack is free from execution,
if free it pushes events into the call stack
*/