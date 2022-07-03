// What is the way to add/delete properties to object in JavaScript dynamically?


// You can simply add a property to an object using object.property_name=value, delete object.property_name is mainly used to remove a property.

// Example:

    let user = new Object();
    // adding a property
    user.name='Anil';
    user.age  =25;
    console.log(user);

    //delete
    delete user.age;
    console.log(user);