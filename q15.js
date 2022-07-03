// What is the Temporal Dead Zone in ES6?


// In ES6 let and const are hoisted (like var, class and function), but there is a period between entering scope and being declared where they cannot be accessed. This period is the temporal dead zone (TDZ).

// Consider:

//console.log(aLet)  // would throw ReferenceError

let aLet;
console.log(aLet); // undefined
aLet = 10;
console.log(aLet); // 10

// In this example the TDZ ends when aLet is declared, rather than assigned.