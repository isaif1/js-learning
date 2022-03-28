//function programming is not possible without higher order function
//a function which takes another function as parameter and return a function is called higher order function


function y(){ //here y is callback function
    console.log('callback');
}

function x(y){ //here x is higher order function
    return y;
}

x(y);

//DRY don't repeat yourself
//same code cannnot be repeat

//calculating area of circle
//we can make a generic function where we can pass the logic of the fucntion
//reusability, modularity, pure function
//map is higher order function, will talk about later, it maps the whole array with some logic

//if we want to use our function as map then use array prototype
// Array.prototype.calculate, when we will puth into prototype then it will appears in all the array

const radius = [1,2,3,4,5];

const area = function(radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const diameter = function(radius){
    return 2*radius;
}

const calculate = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));
console.log(radius.map(area));

//to use our function like function map we have to add our function in the function protoype 

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));