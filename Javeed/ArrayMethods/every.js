//All element should pass the condition in the function
const numbers = [1, 2, -1, 3, 4];
console.clear();
const isPostive = numbers.every((n) => n >= 0);
console.log(isPostive); //False

const arrayList = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 5, 6],
];
const obj = [
  { name: "javeed" },
  { name: "vinay" },
  { name: "mohammad" },
  { surname: "sanganakal" },
];

const isAllArrays = arrayList.every((arr) => Array.isArray(arr));
// console.log(isAllArrays);

const checkProperty = obj.every((pname) => pname.name !== undefined);
console.log(checkProperty);
