// try to add a new key to the const object. can you able to do this?

const obj = {   // Create a const object
    value: 10
};

obj.newKey = "Hello";    // Add a new key to the object
console.log(obj); // Output: { value: 10, newKey: "Hello" }


// Yes, you can add new properties to a const object in JavaScript.
// The const declaration only prevents reassignment of the variable itself,
// not the modification of the object it references.