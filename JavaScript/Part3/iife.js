//An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created. 

// (function display(para){
// }
// )(arg);

// what is iife, what is its significance, what is its use ?
// * function is declared  in a paranthesis, immeditely called by another paranthesis 
// * iife significance is it doesnot allow the function to get into any scope .
// * iife is used in plugins , and to make the code private.



(function display(name){
   console.log(`My  name is : ${name}`);
}
)("Richard");

(function(name){
    console.log(`Here its go... : ${name}`);
 }
 )("Hello World");





// Immediately invoked funciton with a parmeter passed in it.
// (
//     function x(name){
//         console.log(`say hi ${name} `);
//     }
// )('manju');
//we use iife in plugins.


// this is the regular method
// x=function(nationality){
//     console.log(`hi people i am an ${nationality}`)
// }
// x('Indian');


// (function(){}) (); syntax 
// (function(nationality){
//     console.log(`hi people i am an ${nationality}`)
// })('Indian');


// what is iife, what is its significance, what is its use ?
// * function is declared  in a paranthesis, immeditely called by another paranthesis 
// * iife significance is it doesnot allow the function to get into any scope .
// * iife is used in plugins , and to make the code private.

