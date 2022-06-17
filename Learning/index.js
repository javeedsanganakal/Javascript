const cars = [
    {
       "Name":"chevrolet chevelle malibu",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":307,
       "Horsepower":130,
       "Weight_in_lbs":3504,
       "Acceleration":12,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
       "Name":"buick skylark 320",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":350,
       "Horsepower":165,
       "Weight_in_lbs":3693,
       "Acceleration":11.5,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
       "Name":"plymouth satellite",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":318,
       "Horsepower":150,
       "Weight_in_lbs":3436,
       "Acceleration":11,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
       "Name":"amc rebel sst",
       "Miles_per_Gallon":16,
       "Cylinders":8,
       "Displacement":304,
       "Horsepower":150,
       "Weight_in_lbs":3433,
       "Acceleration":12,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
       "Name":"ford torino",
       "Miles_per_Gallon":17,
       "Cylinders":8,
       "Displacement":302,
       "Horsepower":140,
       "Weight_in_lbs":3449,
       "Acceleration":10.5,
       "Year":"1970-01-01",
       "Origin":"USA"
    }];

const numbers = [2, 13, 5, 10, 8, 9, 12, 11, 23, 1, 5, 3];
const  fruits = ['apple', 'banana',  'papaya'];
const names = ['john','richard', 'david'];


//forEach
//To  get a particular element or all elements form te array;
console.clear();
// numbers.forEach((x)=> console.log(x));
// cars.forEach(x => console.log(x.Name));

//filter
//creates new array,it is used to find greater ,lesser or equal elements in  an array.
const filterResult = numbers.filter(x=>x%2==0);
// const filterResult = numbers.filter(x=>x%2==0).sort((a,b)=>a-b);
// console.log(filterResult);

//map
//creates new array, same as forEach, it used as a iterator;

// const mapResult =  numbers.map(x=>x*2)
const mapResult = cars.map(x => x.Name);
// console.log(mapResult);

//sort()
// asc or dsc 
// console.log(fruits.sort()); // apla order;
// console.log(numbers.sort());
// console.log(numbers.sort((a,b) => a-b));
// console.log(numbers.sort((a,b) => b-a));

//some or every
//every() method: All the elements in the array should pass the condition in the function, returns a boolean value
const isAllPostive = numbers.every((n) => n >= 0); //false

//some() method: Atleast one element in the array should pass the condition in the function, returns a boolean value
const isSomePostive = numbers.some((n) => n >= 0); //true

//callback;
// Calling a function from another function
// it will be excute after another function finished  executing



// JavaScript is a first class function why ?
// 1. function can be assigned to a variable?
// 2. funciton can be passed as a argument/parameter to another function?
// 3. function can be written in another function? 

function fisrtFunction(val, someFuncName){
    return val + someFuncName();
}

function secondFunction(){
 return 10;
}
const callBackFunction = fisrtFunction(5, secondFunction);
// console.log(callBackFunction);

const variableFunction = function showTitle(){
   // console.log("Hey, how are you doing guys!!!");
}
variableFunction();

const nestedFunction = function parentFunction(){
   return function childFunction(){
      return "Richard";
   };
}
console.log(nestedFunction()());





















