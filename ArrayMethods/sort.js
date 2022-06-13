const names = ['Siri', 'Elysa', 'Dom', 'Amel', 'Jas'];
console.log(names.sort());

const numbers = [20, 3, 1, 13, 7, 4, 10, 11];
console.log(numbers.sort());

const ascendingOrder = numbers.sort((a,b) => a-b);
    console.log(ascendingOrder);

const descendingOrder = numbers.sort((a,b) => b-a);
console.log(descendingOrder);

// a-b  => -ve 'a' comes first
// a-b  => 0    nothing changes
// a-b  => +ve 'b' comes first