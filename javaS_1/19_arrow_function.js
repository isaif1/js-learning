
//function expression

const addTwoNumbers = function (a, b) {
    return a + b;
}

console.log(addTwoNumbers(1, 2));


//arrow function

const addNumbers = (a, b) => {
    return a + b;
}

console.log(addNumbers(2, 2));

//if there is only one par then we can remove curl braches
const isEven = num => num%2; //it will work as same yay!
