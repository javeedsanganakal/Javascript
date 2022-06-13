
//forEach It is used to get a particular element or complete array

const numbers = [2, 4, 5, 7, 8, 9 ];
numbers.forEach(item => console.log(item));



sum = 0;
numbers.forEach(item => sum+=item);
console.log(sum);



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

