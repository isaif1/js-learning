//function declaration

function helloWorld() {
    console.log('hello world');
}

helloWorld();
helloWorld();

function addNumber(num1, num2, num3) {
    return num1 + num3 + num2;
}

console.log(addNumber(1, 2)); //it will give nan because less argumentsa are being passed


function findNumber(arr, num) {
    for (let a of arr) if (a === num) return a;
}

console.log(findNumber([1, 2, 3], 4));// undefined because number not present and we are not returning anything from function
