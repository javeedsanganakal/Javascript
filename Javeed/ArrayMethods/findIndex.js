const numbers = [1, 2, 3, 4, 5, 6];

// The findIndex() method is quite similar to the find() method but returns the index of the element
// instead of the element itself.It takes a predicate and returns the index of the first element in the
// array that satisfies the predicate.If no element exists - 1 is returned.

console.log(numbers.findIndex((n) => n === 2));
console.log(numbers.findIndex((n) => n === 6));
console.log(numbers.findIndex((n) => n === 0));
