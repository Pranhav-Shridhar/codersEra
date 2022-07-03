// In what ways we can empty a JavaScript Array?


// Below techniques can be used to get an empty array:

// You can modify the older array as an empty array.

emptyArray = [ ];

// You can fix the length according to you of a predefined array to zero.

definedArray.length = 0;

// You can update the array to contain zero elements with the help of the JavaScript splice() method.

definedArray.splice(0, definedArray.length);

// You can pluck out all the elements of the array with the help of array methods: pop() or shift().

while(definedArray.length){
        definedArray.pop();
} //pop() method

// Or

while(definedArray.length){         definedArray.shift(); } //shift() method