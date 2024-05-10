// VARIABLE NAMING
// 1. The name should be unique
// 2. The name should not be any reserved keyword
// 3. The name must start with a character, _, $.

//String
// const singleQuotes = 'Hello!';
// const doubleQuotes = "Hello!!";
const name = "Vera";
const backticks = `Hello, ${name}!`;
const count = `${2 + 2}`; //4

//Numbers
const wholeNumber = 10;
const decimalNumber = 0.3333;

//Booleans
const isCool = true;

if (isCool) {
  console.log("Hi man, you're cool");
} else {
  console.log("Oh, hi...");
}

//Null
let num = null;
num = 20;

//Undefined
let x;

//Objects
const person = {
  name: "Vera",
  age: 25,
};

// Dot notation
console.log(person.name);

// Array
const arr = [1, 2, 3, 4];
console.log(typeof arr);

const date = new Date();
console.log(date);

// JavaScript Dynamically typed
let str = "X";
str = 5;
console.log(typeof str); //number
