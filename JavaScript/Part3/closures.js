// Closures:
// We just looked at how function scope works and how a scope chain is created. Just to recap: when an identifier (i.e., a variable) is used, the JavaScript engine will check the 
// scope chain to retrieve the value for that identifier. The identifier might be found in the local scope (either in the function or block). If it's not found locally, then it might exist 
// in an outer scope. It'll then keep checking the next outer scope followed by the next outer scope until it reaches the global scope (if necessary).

// -A closure is a function that has access to the parent scope, even after the scope has closed.
// -A closure is the combination of a function and the lexical environment within which that function was declared.
// -A clsoure is an inner function which has access to outerfunction variable's in addition to its own variables and global variables.
//  i.e a function declared in another function however has access to the scope of the function called out side of the function it is closure.



// JavaScript is a first class function why ?
// *function can be assigned to a variable
// * funciton can be passed as a argument/parameter to another function
// *function can be written in another function 


// what is callbackHell ?
// * innumerious function calling another function is callbackHell
// * callbackHell can be overcomed by HigherOrder function Promise and async await


console.clear();

function remember(x){
    return function(){
        return x;
    }
}

const y = remember(7)();
console.log(y);
console.clear();
const secondNumber = 40;
const number = 30;

function display(){
    let number = 20;
   return function(){
    let number = 10;
    console.log(number);
   }
}

display()();


console.clear();
const num = 45;
const secondNum = 25;
function jack(){
    // let secondNum = 20;
    function john(){
        // let  secondNum = 30;
            console.log(num);
        }
   return john; 
};
jack()();


console.clear();
function displayResult(a,b){
   let res = "The Result is :  ";
   return function(){
    return res + (a+b);
   }
}
console.log(displayResult(2,3)());


console.clear();
function addElements(){
    const arr = [1, 2, 3, 4, 5];
    return function(){
        return arr.push(8);
    }
}
console.log(addElements()());



console.clear();
function displayCount(){
var counts = 0;
     return function(){
     return  counts += 1;
}
}
var IncrementCount = displayCount()();
console.log(IncrementCount);




// function remember(x){
//     return function(){
//         return x;
//     }
// }

// const y = remember(7)();
// console.log(y)
;


//-------------------------------------------example -2
// const number = 25;
// const secondNumber = 25;
// function jack(){
//     let secondNumber = 20;
//     function john(){
//         let  secondNumber = 30;
//             console.log(secondNumber);
     
//         }
//    return john; 
// };

// // let value = jack()();
// const x = jack();
// const y = x();
// console.log(y);
// console.log(jack()());
// jack()();

//---------------------------------------------example-3
// function addNumber(firstNumber, secondNumber){
//     var  returnValue = "Result is ";
//      return function add(){
//         return  returnValue + (firstNumber+secondNumber);  //output = result is 3
//     };
// };

// const addedResult = addNumber(1,2)();
// document.write(addedResult);


//---------------------------------------------example-4
// function expandArray(){
//     var myArray = ['1','2','3'];
//      return function x(){
//        return  myArray.push('2');    
    
//     }
// }

// const listen = expandArray()();
// // document.write(listen);
// console.log(listen);



//---------------------------------------------example-5
// function count(){
// var counts = 0;

//      return function(){
        // count += 1; 
//     //  return  count = count +1;
//      return  counts += 1;
//     // return count;
// }
// }

// var IncrementCount = count()();
// document.write(IncrementCount);