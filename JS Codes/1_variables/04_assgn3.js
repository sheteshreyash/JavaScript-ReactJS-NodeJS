// create a const object in js. can you change it to hold a number later?

const obj = {    // Create a const object
    value: 10
};

// You can't do this:
// obj = 20; // This will throw an error

obj.value = 20;    // But you can modify its properties
console.log(obj); // Output: { value: 20 }


// In JavaScript, once you create a const object,
// you cannot reassign the variable to point to a different object