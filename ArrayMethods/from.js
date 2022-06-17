console.clear();

const str= '123456';

//const result = Array.from(str); //[ '1', '2', '3', '4', '5', '6' ]
const result = Array.from(str, mapFun);
const result1  = Array.from(str, x => Number(x));
const result2 = Array.from(str, Number);




console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


// Array from a String
Array.from('foo');
// [ "f", "o", "o" ]

// Array from a Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]

function mapFun(x){
    return Number(x);
}
console.log(result2);

//Remove Duplicates
const numbers = [ 1, 2, 3,3, 2, 4, 5, 4, 7, 1, 3, 4, 6 ]; //Works for strings also.
const removedDup =  new Set(numbers);  //Set(7) { 1, 2, 3, 4, 5, 7, 6 }
const removedDup1 =  Array.from(new Set(numbers));
console.log(removedDup1);
// [1, 2, 3, 4, 5, 7, 6];





