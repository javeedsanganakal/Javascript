console.clear();

//some() method , it is used to know atleast one element from the array pass the condition, we will get boolean value as a result.
const numbers = [23, 12, 3, 41, 45, 56, 78, 80, 93];

// const someNumbers = numbers.some(function (x) {
//   return x > 40;
// });

const someNumbers = numbers.some((x) => {
  return x > 40;
});

// const someNumbers = numbers.some(callbackFunc);

// function callbackFunc(value, index, arr) {
//   return value > 100;
// }

console.log(someNumbers);
