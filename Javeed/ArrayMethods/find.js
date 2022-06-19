const fruits = ["apple", "banana", "papaya"];

// The find() method returns the value of the first element that passes a test.The find() method
//executes a function for each array element.The find() method returns undefined if no elements are found.
//The find() method does not execute the function for empty elements.

const findFruit = fruits.find((item) => item === "banana");
console.log(findFruit); //banana

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

const findLaptop = laptops.find((item) => item.name === "Asus");

console.log(findLaptop); //{ name: 'Asus', price: 800, quantity: 1 }

console.log(findLaptop.price);
