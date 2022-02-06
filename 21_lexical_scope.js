//lexical scope
var myVar = 6;
const myfunc = () => {
    const addNumbers = (a, b) => {
        return a + b;
    }
    var myVar = 5;
    const startMachine = () => {
        // console.log("Hello World!");
        console.log(myVar);//first it will check in the lexical scope only then other scope
    }

    console.log(addNumbers(2, 2));
    startMachine();
}

myfunc();





