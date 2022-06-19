//filter() method creates a new array filled with elements that pass a condition/test provided by a function.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((item) => item % 2 == 0);
console.log(evenNumbers);

const laptops = [
  {
    name: "Dell",
    price: 850,
    quantity: 2,
  },
  {
    name: "Asus",
    price: 800,
    quantity: 1,
  },
  {
    name: "Mac",
    price: 1300,
    quantity: 3,
  },
];

const getPrice = laptops.filter((item) => item.price > 800);
console.log(getPrice);
