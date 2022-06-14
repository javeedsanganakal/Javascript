console.clear();

const numbers = [2, 3, -1, 4];

//By using for loop
// let sum2 = 0;
// for (let n of numbers) {
//   sum2 = sum2 + n;
// }
// console.log(sum2);

//reduce
//a = 2; c =3 => a =5
//a = 5; c = -1=> a =4;
//a = 4; c = 4 => a = 8;

const sum = numbers.reduce(
  (accumulator, cuurentValue) => accumulator + cuurentValue
);
console.log(sum);

//a = 0; c =2 => a =2
//a = 2; c = 3=> a =5;
//a = 5; c =-1 => a = 4
// a=4 ; c = 4 => a= 8

// const sum1 = numbers.reduce((accumulator, cuurentValue) => {
//   return accumulator + cuurentValue;
// }, 0);
// console.log(sum1);
