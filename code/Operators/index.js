//Operators  + Variaables => Expressions => Logic  or Algorithms

// 1. Arithmetic Operators
let x = 4; 
let y = 3;

// x, y are operands, 
// + is an operator and
// x+y is an expression 
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y); //quotient of divison
// console.log(x%y); //remainder of divison
// console.log(x**y); // exponential

//Increment ++
console.clear();
//console.log(x);
//console.log(++x); //Pre Increment, first it will increment, and then it will assign.
//console.log(x++); //Post Increment, first it will assign then increment happens.
//console.log(x); 

//Decrement --
console.clear();
console.log(x);
//console.log(--x); //Pre Decrement
//console.log(x--); //Post Decrement
//console.log(x);




// 3. Assignmnet Operator
console.clear();
// x++ or x=x+1
let assnOpr = 5;
//let assnOpr = assnOpr + 5;
assnOpr += 5;
// assnOpr *= 5;



// 4.Comparision Operators
console.clear();

let compOpr = 1;

//Relational Operators
console.log(compOpr > 1);
console.log(compOpr >= 1);
console.log(compOpr < 1);
console.log(compOpr <= 1);

//Equality Operators
// === Both value and datatype should same -> true
// ==  Only values are same -> true
console.clear();
console.log(compOpr === 1);
console.log(compOpr !== 1);

// 5. Equality Operators
console.clear();
//Strict Equality (Both Value aand Type) 
//we will use most of the cases strict equ  opr
console.log(1 === 1);
console.log('1' === 1);
//Lose Equaality  (Only Value)
console.clear();
console.log(1 == 1);
console.log('1' == 1);
console.log( true == 1);



// 6.Ternary Operator or Conditional Oprerator
// If student has more than 35 marks ,consider as 'Pass', otherwise 'Fail'
console.clear();
let marks = 80;
let finalResult = marks > 35  ?  'Pass' : 'Fail';
console.log(finalResult);





// 7. Logical Operators

// Logical AND (&&)
// Return true if both operands are true.
console.clear();
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);
// Logical OR (||)
// Return true,if one of the  operands  is true.
// eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan);

// NOR (!)
console.log(!eligibleForLoan);



// 8. Logical Operators with Non-Boolean



















 