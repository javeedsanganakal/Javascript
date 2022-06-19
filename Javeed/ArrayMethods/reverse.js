console.clear();

const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers.concat());

// const newArray = numbers.concat(); // add into new array
const newArray = [...numbers]; //copy all element into new array

// console.log(newArray.reverse());
// console.log(numbers);

// The split() method splits a string into an array of substrings.The split() method returns the new array.The split() method does not change the original string.
// If(" ") is used as separator, the string is split between words.

const str = "Coding is fun!";

//console.log(str.split()); //[ 'Coding is fun!' ]

console.log(str.split(""));
// console.log(str.split(" ")); //[ 'Coding', 'is', 'fun!' ]

console.log(str.split("").reverse());

//join() The join() method creates and returns a new string by concatenating all
//of the elements in an array(or an array - like object),
//separated by commas or a specified separator string.

console.log(str.split("").reverse().join(""));
