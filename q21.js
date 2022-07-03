// How to “deep-freeze” object in JavaScript?


// If you want make sure the object is deep frozen you have to create a recursive function to freeze each property which is of type object:

// Without deep freeze:

let person = {
    name: "Leonardo",
    profession: {
        name: "developer"
    }
};
Object.freeze(person); // make object immutable
person.profession.name = "doctor";
console.log(person); //output { name: 'Leonardo', profession: { name: 'doctor' } }


// With deep freeze:

function deepFreeze(object) {
    let propNames = Object.getOwnPropertyNames(object);
    for (let name of propNames) {
        let value = object[name];
        object[name] = value && typeof value === "object" ?
            deepFreeze(value) : value;
    }
    return Object.freeze(object);
}
let person = {
    name: "Leonardo",
    profession: {
        name: "developer"
    }
};
deepFreeze(person);
person.profession.name = "doctor"; // TypeError: Cannot assign to read only property 'name' of object