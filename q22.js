// In JavaScript, why is the “this” operator inconsistent?


// The most important thing to understand is that a function object does not have a fixed this value — the value of this changes depending on how the function is called. We say that a function is invoked with some a particular this value — the this value is determined at invocation time, not definition time.

// If the function is called as a “raw” function (e.g., just do someFunc()), this will be the global object (window in a browser) (or undefined if the function runs in strict mode).
// If it is called as a method on an object, this will be the calling object.
// If you call a function with call or apply, this is specified as the first argument to call or apply.
// If it is called as an event listener, this will be the element that is the target of the event.
// If it is called as a constructor with new, this will be a newly-created object whose prototype is set to the prototype property of the constructor function.
// If the function is the result of a bind operation, the function will always and forever have this set to the first argument of the bind call that produced it. (This is the single exception to the “functions don’t have a fixed this” rule — functions produced by bind actually do have an immutable this.)