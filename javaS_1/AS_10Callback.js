//what is callBack function in JS
//we have pass function as argument in to the function then as parameter this function is calls sometimes later
//that is why it is called callback function
//like settimeout take callback function

setTimeout(function(){
    console.log('1');
},3000);

function y(param){
    console.log('x');
    param();
}

y(function(){
    console.log('y');
})
//in the above code we are achieving asynchronous
//asynchronous task is not possible without the callback

//JS has only one call stack, everything is executed only through the call stack
//call stack is also called main thread
//if any operation blocks the call stack that means, it is blocking the main thread
//we should never block our thread

//JS is asynchronous single threaded language

//let see we have a button, then on click we are callling afunction that is callback function
function attackEventlistner(){
    let count = 0;
document.getElementById('clickMe').addEventListener('click',function xyz(){//this callback function will be having closure
    console.log('I am clicked',count++);
})
}

attackEventlistner();

//event listeners ke handler me bhi ye callback function with dekhne ko mil jayega, in developer tools
//we need to remove event listeners because it take memoryS,even if the call stack is empty still it is not freeing up the memory
//because we don't know when someone click on the button and we need to call the callback function
//with lexical scope
//so if there are many event listener then there will be many closure, our website will be slow
//\\/\//////\\/\/\/\    GARBAGE COLLECTION //\//\/\\/\//\\/\/\\
//when we remove the event listeners then all the closure variables will be garbage collected

//when you will click button then this callback function will comes into main thread