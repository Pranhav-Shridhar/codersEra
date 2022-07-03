// What will be the output of the following code?


var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);

// Above code will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object it’s local variable. delete operator doesn’t affect local variable.