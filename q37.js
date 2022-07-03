// What do you mean by Imports and Exports?


// Exports and Imports specially assist us in writing modular JavaScript code. Using these, we can easily split our code into various files. Imports enables us taking only particular variables or procedures of a file. We can simply import variables or methods that are exported by a module. Following is the example for more details.

//index.js

 import name,age from './person'; 

 console.log(name);
 console.log(age);

 //person.js

 let name ='Sharad', occupation='developer', age =26;

 export { name, age}; 