//promise chaining
//promise resolve



// const myPromise = Promise.resolve(5);
// myPromise.then((d)=>{
// console.log(d);
// })



//then() method always return promise
//this means we can do chaining here
// that will also return promise
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve('foo');
//     })
// }


// //promise chaining
// myPromise().then((value)=>{
//     console.log(value);
//     value+="bar";
//     return value; //it will return a promise
// }).then((value)=>{
//     console.log(value);
// })



//CALLBACK HELL INTO PROMISES

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');


function changeText(element,text,color,time){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            resolve('xyz');
        }else{
            reject('element not found');
        }},time)
})}



changeText(heading1,'one','violet',1000)
.then(()=>{return changeText(heading2,'two','red',1000)})
.then(()=>changeText(heading3,'three','blue',1000))
.then(()=>changeText(heading4,'four','green',1000))
.then(()=>changeText(heading5,'five','yellow',1000))
.then(()=>changeText(heading6,'six','purple',1000))
.then(()=>changeText(heading7,'seven','orange',1000))
.catch((e)=>alert(e))