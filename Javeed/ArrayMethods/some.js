const numbers = [1, 2, -1, 3, 4];
//every() method: All the elements in the array should pass the condition in the function
const isAllPostive = numbers.every((n) => n >= 0); //false

//some() method: Atleast one element in the array should pass the condition in the function
const isSomePostive = numbers.some((n) => n >= 0); //true

console.clear();
const arrayList = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 5, 6],
];
const obj = [
  { name: "javeed" },
  { name: "vinay" },
  { name: "mohammad" },
  { surname: "sangannakal" },
];

// const isAllArrays = arrayList.some((arr) => Array.isArray(arr));
// console.log(isAllArrays);

// const checkProperty = obj.some((pname) => pname.name !== undefined);
// console.log(checkProperty);
