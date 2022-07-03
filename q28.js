// How can you eliminate duplicate values from a JavaScript array?


// There are several ways to eliminate duplicate values from an array. You will the most popular one’s below:

// By using set
// This is the simplest way you can eliminate duplicate values from a JavaScript array. Set is a JavaScript object that built-in and stores the creative values in a different array. The below program will build an array with innovative values:

function uniqueArray(array){
  let newArray = Array.from(new Set(array));
  return newArray;
}

let a = [1,2,1,3,2];
console.log(uniqueArray(a));

// By using filter
// This valuable approach eliminates all the duplicate values from the JavaScript array by implementing a filter on it. The filter() method needs three arguments: element (we wish to check for duplicity), index (of the element) and array (containing duplicates). The below program returns an innovative array:

function newArray(array){
    let b = array.filter(function(elem, index, self){
        return index == self.indexOf(elem);

    })
    return b;
}

let c = [1,2,1,3,2];
console.log(newArray(c));

// By using for loop
// This helpful method is a somewhat tiresome and not always suggested. However, you can simply build a unique array by making an empty array and only putting fresh values that are not already there in the array. The code implementation looks like this:

function uniqueA(dups_names) {
    var unique = [];
    arr.forEach(function(i) {
        if (!unique[i]) {
                unique[i] = true;
        }
    });
    return unique;
}
var arr = [1,5,2,4,1,6]
console.log(uniqueA(arr));

