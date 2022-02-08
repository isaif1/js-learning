{
    //they cannot be access outside of this block,cause of block scoped
    let name = 'abc';
    const age = 22;
}

function func(){
    //they can be access in the function scope
    if(true){
        var name = 'xyz';
        var age = 24;
    }
    console.log(name,age);
}

func();

//default parameters
// function newFunc(a,b=0){

// }

//rest parameters
function newFunc(a,b,...c){
console.log(`a is ${a}`);
console.log(`b is ${b}`);
console.log(`c is ${c}`);
}

newFunc(1,2,3,4,5,6);


//parameters destructuring, 
//only when we know what is coming and how we can destructuring it.

const obj = {
    name:'abc',
    age: 33
}

function para_destructuring({name,age,year}){
console.log(name);
console.log(age);
console.log(year);//this will be undefined, cause does not exist in object
}

para_destructuring(obj);