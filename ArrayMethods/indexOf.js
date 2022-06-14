const names = ["apple", "banana", "papaya"];

// console.log(names.indexOf("banana")); // 1

// console.log(names.indexOf("Banana")); // 1
// console.log(names.indexOf("")); //-1
// console.log(names.indexOf("watermelon")); //-1

const searchIdx = names.indexOf("banana");

names[searchIdx] = "pineapple";
console.log(names);

// if (searchIdx > -1) {
//   console.log("yaaay!!, we replaced");
// } else {
//   console.log("Oops!! not replaced");
// }

const fruits = ["apple", "banana", "papaya", "banana", "watermelon"];
const fruitIdx = fruits.indexOf("banana");
const fruitLastIdx = fruits.lastIndexOf("banana");
console.log(fruitIdx); // 1
console.log(fruitLastIdx); //3
