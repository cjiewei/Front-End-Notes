// Comparsion Operators => true/false
const a = 5;
const b = 10;
console.log(a > b);

// Is equal
console.log(a == b);
// Not equal
console.log(a != b);

// Strict Equality
console.log(a === b);
// Strict Inequality
console.log(a !== b);

// Loose Equality
// Doesn't compare DATA TYPES
console.log(20 == "20"); // true

// The Good Ones: === !==
// The Evil Twins: == !=

console.log("" == "0"); // false
console.log(0 == ""); // true
console.log(0 == "0"); // true

console.log(false == "false"); // false
console.log(false == "0"); // true

// Logical Operators
// AND && => ALL OPERANDS ARE TRUE => TRUE
console.log(true && true && true);
// OR || => AT LEAST ONE OPERAND IS TRUE => TRUE
console.log(true || false);
// NOT !
console.log(!false);
