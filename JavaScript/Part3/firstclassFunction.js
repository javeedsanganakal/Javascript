// JavaScript is a first class function why ?
// *function can be assigned to a variable
// * funciton can be passed as a argument/parameter to another function
// *function can be written in another function 



//1. function can be assigned to a variable
var x  =  function test(){
    console.log('This is invoking the function');
};
x();



// 2. funciton can be passed as a argument/parameter to another function
function sayHi()
{
    return "Hey Hi Guys!!";
}

 function greet( funName, text)
{
     console.log(funName() + text);
}

greet(sayHi,"Whatsappp")


// 3. function can be written in another function 
// Nested function
const varX = function firstFuncion(){
    return function secondFuncion(){
        console.log("Its an Nested function!! ");
    }
}

varX()();



// console.log('This is invoking the function 2');

// //------------------------------------------------//

// passing function as a argument
// function sayHello(){
//     return "Hello everybody";
// };

// function greeting(jack, manju){
//     console.log(jack() + manju );
// };
// greeting(sayHello," GoodMorning");

// Jack = sayHello = "Hello everybody"
// manju = " GoodMorning"


// //------------------------------------------------//
// const sayMathew = function johnny(){
//     return function(){
//         console.log('say hi to everyone ...!');

//     }
// }
// console.log(sayMathew()());
// const julie = sayMathew();
// julie(); 



// //----------------------------------------------//
// function johnathan(){
//     return function jrJohnathan(){
//         console.log('Love every one as you love yourself');
//     };
// }

//     // johnathan()();
// const joseph = johnathan();
// joseph();


