// splice() methods adds or removes the elements from the Array.
// It overwrites the original array.

//array.splice(index, howmanyToDelete, addItem1, ....., addItemX);
console.clear();
const fruits = ["Apple", "Mango", "Orange", "Banana", "Pineapple"];

// Add 2 fruits in an array
// const addedFruits = fruits.splice(2,0,"Papaya", "Grapes");
// console.log(fruits);
// console.log(addedFruits);

// Remove 2 fruits in an array
const removedFruits = fruits.splice(2, 2);
console.log(fruits);
console.log(removedFruits);
