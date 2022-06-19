
//1. variables

let name;
let name1 = "Hello World";
console.log(name); //undefined
console.log(name1); // Hello world

// Variable cannot be resevred key word like int, if , while etc...,
// Should  be meaningfull
// Cannot start with a number (2name)
// Cannot contain a space or hypen (-)
// Are case sensitive



// 2. Constants  

console.clear();
let  intrestRate  = 11.5;
intrestRate = 12;

// Cannot reassgin values to const
const  fixedIntrestRate = 12;
// fixedIntrestRate = 12.5;
console.log(fixedIntrestRate);
console.clear();

//3. Primitive types or Value types or data types
let name2 = 'Richard'; // String literal
let age = 30 ; //  Number literal
let isApproved = false; // Booloean  Literal
let firstName = undefined;  
let selectedColor = null; //Clear the value

//4. Dynamic Typing
console.clear();
// JS is Dynamic language
// In Static lang, we can't change the type of variable; 
// In Dynamic lang, we can change the type of variable;

let dynLang = 'JavaScript';
console.log(typeof dynLang); 
dynLang = 123;
console.log(typeof dynLang);
dynLang = true;
console.log(typeof dynLang);  

//All digits are typeof numbers, no float in Javascript
let digit = 123;
let decimalNum = 12.33;
console.log(typeof digit);
console.log(typeof decimalNum);

let empName    = undefined;
console.log(empName);
console.log(typeof empName);

let intialValue = null;
console.log(intialValue);
console.log(typeof intialValue);

//4. Objects
console.clear();
//Reference types => Objects, Array, Functions
//Dealing with multiple variable we can use objects.

let studentName = 'John';
let studentAge = 22;

let students = {
    studentName : 'john',
    studentAge : 22
}

console.log(students);
console.log(students.studentAge);
students.studentAge = 25;  //(or) students['studentAge'] = 25;
console.log(students.studentAge);

//5. Arrays
console.clear();

//It is datastructure,  to store list of elements with same or different data types

let colors = ['red', 'blue',  'green'];
console.log(colors);
colors[2] = 'white'; 
console.log(colors[2]);
colors[1] = 5; 
console.log(colors);
console.log(colors[1]);
console.log(colors.length);

// 6. Functions 
console.clear();
// Function is set of statements performs a task and calculate a value.   

function greet(){
    console.log("Hey!! John");
}
greet();

function greetWithName(name){  //name is  parameters
    console.log("Hey!! "+ name);
}
greetWithName("Jolly")  //Jolly is an argument

//Type of Functions
function addition(value1, value2){
    return value1 + value2;
}
const sumOfNumbers = addition(2,3);
console.log(sumOfNumbers);

function additionOfNums(value1, value2){
    console.log(value1 + value2); 
}
additionOfNums(2,9)









 












