// When should I use Arrow functions in ES6?

// I’m now using the following rule of thumb for functions in ES6 and beyond:

// Use function in the global scope and for Object.prototype properties.
// Use class for object constructors.
// Use => everywhere else.

// Why use arrow functions almost everywhere?

// Scope safety: When arrow functions are used consistently, everything is guaranteed to use the same thisObject as the root. If even a single standard function callback is mixed in with a bunch of arrow functions there’s a chance the scope will become messed up.
// Compactness: Arrow functions are easier to read and write. (This may seem opinionated so I will give a few examples further on).
// Clarity: When almost everything is an arrow function, any regular function immediately sticks out for defining the scope. A developer can always look up the next-higher function statement to see what the thisObject is.