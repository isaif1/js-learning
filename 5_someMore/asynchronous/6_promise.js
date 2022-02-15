//promise is value that we will know in the future
// promise may have pending status fullfill status
//it needs to create promise
console.log('begin');
const bucket = ['rice','chips','vegetables','sugar'];

//Produce promise
const myDinner = new Promise((resolve,reject)=>{
    if(bucket.includes('rice') && bucket.includes('vegetables')&& bucket.includes('salt')){
        resolve({myDish: 'Fried Rice'});
    }else{
        //not only error object, we can pass simple string here
        reject(new Error("not sufficient ingredients!"));
    }
})


//consume promise
//callback function ke ander resolve value aa jayegi
//2nd callback function is for reject

// myDinner.then((dinner)=>{
// console.log('ready to eat', dinner.myDish);
// },(e)=>{
// console.log(e);
// })

//instead we can catch it
    //this will be throw into webAPI
    //after time over will be thrown into call microtask queue
myDinner.then((dinner)=>{
    console.log('ready to eat', dinner.myDish);
    }).catch((e)=>{
    console.log(e);
    })

    //promise works asynchronously, this is browser feature
    //promise will store in js memory
    //.then will be handle by browser
    //promises are add in the microtask queue after WebAPI, not in callback queue
    //first microtask wale task ko chalayega, because its priority is more

    //this will be throw into webAPI
    //after time over will be thrown into call back queue
    setTimeout(()=>{
        console.log('hello timeout');
    },0)

    for(let i=0;i<100;i++){
        console.log(Math.random(),i);
    }

    console.log('the end!');


    //we can also return promise from inside function
    function myPromise(){
        return new Promise((resolve,reject)=>{
            if(bucket.includes('rice') && bucket.includes('vegetables')&& bucket.includes('salt')){
                resolve({myDish: 'Fried Rice'});
            }else{
                //not only error object, we can pass simple string here
                reject(new Error("not sufficient ingredients!"));
            }
        })
    }