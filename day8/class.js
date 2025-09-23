// // Using Object Literals
// const student1 = {
//   name: "abc",
//   age: 20,
// };

// const student2 = {
//   name: "xyz",
//   age: 22,
// };

// // Using a Class
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// Function Declaration
f1();
function f1() {
  console.log("From the function with 'function keyword'");
}

// Function Expression
// f2(); // error - function expressions are not hoisted
const functionExpression = function() {
  console.log("From the function with 'function expression'");
};
functionExpression();

// Arrow Function
const arrowFunction = () => {}; 