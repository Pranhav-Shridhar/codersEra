// What’s the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?

// 

function foo() {
    x = 1; // Throws a ReferenceError in strict mode
  }
  
  foo();
  console.log(x); // 1


//   A variable that is undefined is a variable that has been declared, but not assigned a value. It is of type undefined.

  var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === 'undefined'); // true

console.log(foo == null); // true. Wrong, don't use this to check!

function bar() {}
var baz = bar();
console.log(baz); // undefined



