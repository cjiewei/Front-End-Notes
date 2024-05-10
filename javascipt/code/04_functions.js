// A BLOCK OF CODE => PERFORMS A TASK

// A FUNCTION DECLARATION (defining a function)
function square(number) {
  return number * number;
}

// A FUNCTION CALL (calling/executing a function)
const result = square(5);

console.log(result);

// A function declaration
function name(params) {
  // statements
  // have access to "this" keyword
}

// A function expression
const name = function (params) {
  // statements
};

// An arrow function
const name = (params) => {
  // statements
};

// Returns underfined
function add(a, b) {
  return a + b;
}

const sum = add(2, 2);
console.log(sum);

// Arrow Function
const square = (number) => number * number;

const result = square(10);
console.log(result);

let hour = 10;
if (hour >= 6 && hour < 12) console.log("Good morning");
else if (hour >= 12 && hour < 18) console.log("Good afternoon");
else console.log("Good evening");

// For Loop
for (let i = 5; i >= 1; i--) if (i % 2 !== 0) console.log(i);
