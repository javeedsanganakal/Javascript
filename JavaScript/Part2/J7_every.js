console.clear();

//every() method , it is used to know all elements from the array pass the condition, we will get boolean value as a result
const numbers = [23, 12, 3, 41, 45, 56, 78, 80, 93];

// const everyNumbers = numbers.every(function (x) {
//   return x > 40;
// });

const everyNumbers = numbers.every((x) => {
  return x < 100;
});

// const everyNumbers = numbers.every(callbackFunc);

// function callbackFunc(value, index, arr) {
//   return value > 100;
// }

console.log(everyNumbers);
