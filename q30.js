// Explain the output of the following code.


var courses = ["JavaScript","Java","C","C++","Python"];
delete courses[2];
console.log(courses.length);
 
// The output of the above-mentioned code is 5. It’s because the delete operator does not really affect the entire length of the array as the operates removes only the value which is there at the position. At the deleted index, we receive the value undefinedx1 (in Chrome) or just undefined/ empty. Therefore, if we have wished to try the statement console.log(courses),we will get (5) [“JavaScript”, “Java”, empty, “C++”, “Python”].