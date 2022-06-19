console.clear();

const numbers = [1, 2, 3, 4, 5];

//fill() method: Replace all or some particluar  elements in the Array with provided value in method
const fillWith = numbers.fill("*");
console.log(fillWith); // [ '*', '*', '*', '*', '*' ]

const numbers1 = [1, 2, 3, 4, 5];
const fillWithParticular = numbers1.fill("*", 1, 3);
console.log(fillWithParticular); // [ 1, '*', '*', 4, 5 ]

console.log(fillWithNumbers(10));

//Create an empty array, fill with zeros and map through it
//map(value, index, array) , when we are not giving value as param, give _  , bcz it will come first or else it will consider index as a value

function fillWithNumbers(n) {
  return Array(n)
    .fill(0)
    .map((_, index) => index + 1);
}
