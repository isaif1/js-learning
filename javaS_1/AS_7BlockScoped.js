//block is just curly braces

{
    //compound statement
    //it combimne multipel statements into one
    var a=5;
    console.log(a);
    //we need to use these block where JS expected multiple statement into one statement
    //if you want multiple statement then you can only do that by grouping them together
    //that is why we need scope
}

if(true)true;//one statement and complete

//here JS expect single statement, so we can use block to use multiple statement and jS will kknow it one statement
if(true){
    var a=5;
    console.log(a);
}

//BLOCK SCOPE -> what all variables that we access inside block

{
    var a=10; //this will hoist inside global scope, while let and const will hoistonly in the block scope
    let b=20;
    const c=30;
    //you cannot access b and c outside of this block
}
//after executing above block only a will be accecable here,
//b and c will be removed
console.log(a);


//\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\/\//\\//\\/
// SHADOWING

var a=100
{
    var a=10; //this will shadow the upper variable a to 10, it will change value in global scope
    //but this is not possible in the let and const
    let b=20;
    const c=30;
}


let b=100 //this will be in script memory
{
    var a=10; 
    //below b will be in the scope memory
    let b=20;//this shadow the b above it but cannot change value because both b are in different memory space, not even in global space
    const c=30;
}

//Shadowing of const
const c=100 //this will be in script memory
{
    var a=10; 
    let b=20;
    const c=30;//this will shadow
}
//even if block is function then also shadowing behaves in a similar way


//Illegal shadowing
// let z=100;
// {
//     var z=1;//because here var will cross the boundary
// }


var z=100;
{
    let z=1;//this is possible, even if it is const
}

//similarly below code is possible
let z=100;
function x(){//this is also applicable for arrow function
    var z=1; //this is possible because var is function scoped
    //anything that is shadowing must not cross the boundary
}


let y=100;
{
    let y=10;
    {
        //three memory will be there
        let y=20;
        ///it will follow lexical scope chain pattern
    }
}