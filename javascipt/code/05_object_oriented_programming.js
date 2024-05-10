// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory Functions
function creatCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = creatCircle(1);
circle1.draw();
const circle2 = creatCircle(2);
console.log(circle2);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(1);

// Getter and Setter
// getters => access properties
// setters => change (mutate) them
const person = {
  firstName: "Vera",
  lastName: "Chiu",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Jere Shih";
console.log(person);

// Cloning an object
// const another = Object.assign({}, circle);
const another = { ...circle };
console.log(another);
