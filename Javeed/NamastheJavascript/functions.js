//How functions work in JS ❤️ & Variable Environment | Namaste JavaScript Ep. 4

// 1. We learnt how functions work in JS.
// 2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
// 3. In the first phase, the variables are assigned "undefined" while functions have their own code.
// 4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
// 5. Once the function ends, the EC is removed from the call stack.
// 6. When the program ends, even the global EC is pulled out of the call stack.




var x = 1;
a();
b();
console.log(x);

function a(){
    var  x =10;
    console.log(x);
}

function b(){
    var x = 20;
    console.log(x);
}


