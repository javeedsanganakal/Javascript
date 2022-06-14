// join() method creates a new string from an array by concatinating all the elements from that array,
// by default it uses a comma as an separator
// but we can specify, if we want to change the separator.
console.clear();

const names = ["apple", "banana", "papaya"];
const afterJoin = names.join();
console.log(afterJoin); //apple,banana,papaya

console.log(names.join("*")); //apple*banana*papaya

console.log(names.join(" ")); //apple banana papaya
