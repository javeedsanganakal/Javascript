//It returns the portion of an array or exact element.
//array.slice(start, end)
//does not change the original array.

const numbers = [20, 3, 1, 13, 7, 4, 10, 11];

const afterSlice = numbers.slice(2, 5);
// const afterSlice = numbers.slice(2);
// const afterSlice = numbers.slice(-2);



console.log(numbers);
console.log(afterSlice);