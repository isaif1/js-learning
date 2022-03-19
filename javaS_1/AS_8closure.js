//closure id a function that is bundled to it's lexical environment
//function along with it's lexical scope forms a closure


//after execution function is gone absolutely

//when function x will return y then x function will be vanished and varible inside will be gone
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();  //z has function y reference

console.log(z);

z();//it will try to find out a, that is not there, what will print undefined null or anything else
// it will return 10

// when function return then they maintains/remembers there lexical scope
//closure will be return
//it will remember reference to a

//if we change variable a to 100 in the same function then it will be there as updated value because there is reference that has been return



//below y forms closure along with the scope of x and z
function z() {
    function x() {
        var a = 10;
        function y() {
            console.log(a);
        }
        return y;
    }

    x();
}

z();

//there are many uses of closures
//->module design pattern
// ->cyrrying
// ->functions like once
// ->memoise
// ->maintaining state in async world
// ->setTimeouts
// ->iterators
// ->and many more....


//SETTIMEOUT
function x() {
    //below setTimeOut will stored somewhere and timer will run, untill code will execute and hello buddy will be print
    //when time will be over then callback function of setTimeout will be thrown to call stack
    setTimeout(function () {
        console.log("3");
    }, 3000)
}

x();
console.log('hello buddy');

//printin 1 to 5 interval of 1 second
function x() {
    for (var i = 1; i <= 5; i++) { //here we will use let because it has a block scope
        //this setTimeOut will remember the reference of i, for all reference will be same for all
        //so js will run and loop will break at i=6
        //it prints 6 everytime because all are referring the same memory
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
}

x();


function x() {
    for (let i = 1; i <= 5; i++) { //because of let, function will call new variable with scope
        //there will be new copy of variable
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
}

x();


//Now we cannot use let, we can only use var
function x() {
    for (var i = 1; i <= 5; i++) {
        function close() {
            setTimeout(function () {
                console.log(i);
            }, i * 1000)
        }
        close(i);//here we have created a new copy of i and passed to functin then it calls the setTimeOut
    }
}

x();


//Closure -> each function have access to its outer lexical environment, even if this function is present in the other scope
//it remembers the reference to it's lexical scope


function Counter(){
    var count=0;

    this.increamentCounter = function(){
        count++;
    }
    this.decreamentCounter = function(){
        count++;
    }
}

var counter1 = new Counter();

counter1.decreamentCounter();


//in terms of closure, thee can be over consumption 
//because they are not garbage collection, it may leave to memory leak

//garbage collector is part of js engine that removes memory as soon as it ececuted

//todays smart garbage collector are there