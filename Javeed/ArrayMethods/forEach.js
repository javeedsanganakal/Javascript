
//forEach It is used to get a particular element or complete array

const numbers = [2, 4, 5, 7, 8, 9 ];
numbers.forEach(item => console.log(item));


console.clear();

sum = 0;
const res = numbers.forEach(item => sum+=item);
console.log(sum);
// console.log(numbers);



const letters = ['a', 'b', 'c', 'b', 'c', 'a', 'b', 'd'];
const lettersCount = {};
letters.forEach(item => {
    if(lettersCount[item]){
       lettersCount[item] = lettersCount[item]+1;
}
else{
    lettersCount[item] = 1;
}
});
console.log(lettersCount);

