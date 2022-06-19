//Same as filter, Creates a new array by calling a function for every element, It is used as a iterator.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((n) => n % 2 == 0);
console.clear();
const mapped = evenNumbers.map((n) => "<li>" + n + "</li>");

const joined = mapped.join();

console.log(mapped);
console.table(joined);

console.log(evenNumbers);

//Chaining all three methods
const chaining = numbers
  .filter((n) => n % 2 == 0)
  .map((n) => "<li>" + n + "</li>")
  .join(" ");

// const doubleNumbers = numbers.map((n) => n * 2);
// console.log(numbers);
// console.log(doubleNumbers);

// const laptops = [
//   {
//     name: "Dell",
//     price: 850,
//     quantity: 2,
//   },
//   {
//     name: "Asus",
//     price: 800,
//     quantity: 1,
//   },
//   {
//     name: "Mac",
//     price: 1300,
//     quantity: 3,
//   },
// ];

// let totalCost = laptops.map((item) => item.price * item.quantity);
// console.log(totalCost);

// const strNums = ["1", "2", "3", "4"];
// // const nums = strNums(item => Number(item)) //or
// const nums = strNums.map(Number);
// console.log(strNums);
// console.log(nums);
