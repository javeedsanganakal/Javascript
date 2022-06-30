var userName = 'Johnson';
function scope(){
var userName = 'Atlas';
console.log(userName);
}
scope();

var x= 10; //global scope
function first(){
    // var x=20;  //parent scope
    return function(){
        // var x= 30;
        console.log(x); //child scope

    }
}
first()();


// var userName = "Bill";

// function ShowUserName()
// {
//     var userName = "Steve";

//     console.log(userName);
// }

// ShowUserName();

// console.log(userName);

//-----------------------------------------
//  var x= 10; //global scope
// function johnny(){
//     // var x=20;  //parent scope
//     return function(){
//         // var x= 30;
//         console.log(x); //child scope

//     }
// }

// johnny()()


// x = {FirstName: 'Jack',LastName: ['Manjunath','s'],MarkObtained : { English: 90 , Maths:95, Science: 92, SocialScience: 87},age: 30}



// ------------------------------------------


// function myFunction() {
//   var n = 8;
   
// //    n= 10;
//   console.log(n + "  read at the last");
// }




// var n = 2;
// console.log(n);  //hoisting

// myFunction();


// what is closure ?
// * -A clsoure is an inner function which has access to outerfunction variable's in addition to its own variables and global variables.

// *scope heirarcy     Child Scope ->Parent Scope -> Global Scope


