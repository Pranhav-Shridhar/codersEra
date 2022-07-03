// Explain the difference between Object.freeze() vs const


// const and Object.freeze are two completely different things.

// const applies to bindings (“variables”). It creates an immutable binding, i.e. you cannot assign a new value to the binding.


const person = {
    name: "Leonardo"
};
let animal = {
    species: "snake"
};
person = animal; // ERROR "person" is read-only

// Object.freeze works on values, and more specifically, object values. It makes an object immutable, i.e. you cannot change its properties.

let p = {
    name: "Leonardo"
};

Object.freeze(p);
person.name = "Lima"; //TypeError: Cannot assign to read only property 'name' of object
console.log(p);