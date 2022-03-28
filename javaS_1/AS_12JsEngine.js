//JS can run inside browser, server, smart watch, LED, robots
//it is possible because of JS runtime environment

//JS runtime environment is container that require all the things to run js code
//it has js engine, set of API to connect to the outer environment, event loop, callback queue, microtask queue
//JS runtime environment is not possible without JS Engine

//Every browser has JS runtime environment,
//NodeJs also has JS runtime environment
//anywhere if you want to run the JS code then it must have JS runtime environment
//JS runtime environment has a local storage in the browser
//NodeJs and browser ko same maano for JavaScript

//web api's are present in the runtime environment of browser as well as nodejs

// setTimeout may work differenlty in the Browser and NodeJs environment

//JS engine is the heart of the JS

//Different browser has their JavaScript Engine

//INterpreter -> execute the code one by one without knowing what will happen in the next line of code, it has speed
//Compiler -> first code is compiled then new code is formed that is optimized version of code then execute, it hase more efficiency
//JS can behave like interpreted as well as compiled language, everything is depends on the JS engine
//Initially it was only interpreted, because it runs on browser

//JS ENGINE ARCHITECHTURE
//JS Engine is a programme that is written in low level language
//chrome engine V8 is written in C++

//JS engine takes code and do PARSING -> COMPILATION -> EXECUTION
//PARSING->it takes code and broken into tokens and convert into AST(abstract syntax tree)
//COMPILATION -> JIT(just in time), it mix both interpreter and compiler to achieve JIT compiled language. now this compiler converts code into byte code
//and send it to execution, it optimized the code at RUNTIME that is why it is called JIT compilation

//In some JS engine there is something known as AOT(ahead of time compilation), it takes the code that is going to run and try to optimize it as much as possible
//EXECUTION -> there are two major components, memory heap(it is the place all the memory are stored, variables and functions assigned memory) and call stack
//similarly there is Garbage collector that cleans the memory, using mark and sweep algorithm
//there are some more optimization that JS does like inilining, inline caching, copy ellision

//see this js engine may have work differently at different places line V8, spiderMonkey, chakra

//we can use JS for functional as well as object oriented programming language