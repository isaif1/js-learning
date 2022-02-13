//when any function returns a function, then local variables also return with this
//it is called closure

function helloOut(abc,xyz){
    function helloIn(){
   console.log(abc,xyz);
    }
    return helloIn; //it will not only return helloIn function, also return abc and xyz
    //that are present in the local memory, this is called closure
}

const newVar = helloOut('hira','raman');

newVar();  //it has helloin function with closure



// function hello(arg){
// const a = 'aaa';
// const b = 'uehdue';
// return function(){
//     console.log(a,b,arg);
// }
// }


// const ans = hello('hey');
// ans();
    


//const myFunction = (power)=>(num)=>num**power;//this is same asd below code

// function myFunction(power){
// return function(num){ //this whole function with variables will be move to GEC when return to ans
//     return num**power;
// }
// }


// const ans = myFunction(5);
// const res = ans(2);
// console.log(res);



//application of closure


function myFunc(){
    let flag = false;
    return function(){
        if(!flag){
        console.log("i am being called first time");
        flag  = true;
        }else{
            console.log("I am already been called!");
        }
    }
    }

const ans = myFunc();
ans();
ans();