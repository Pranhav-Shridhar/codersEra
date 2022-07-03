// What is IIFEs (Immediately Invoked Function Expressions)?

// It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created:

(function IIFE(){
    console.log( "Hello!" );
})();
// "Hello!"

// This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.