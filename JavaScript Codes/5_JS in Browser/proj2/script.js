console.log("This is proj2");

console.log("Advantages includes seperation of concerns and browser cacheing");
console.log(console); // return value of console.log is undefined
console.error("This is error message");
console.assert(5 > 45); // can assert correct value, assertion is failed when you try to pass incorrect values or statements or functions
// console.clear()   // clears the console

let obj = { a: 34, b: 432, c: 4224 };
console.table(obj);
console.warn("This is warning message");
console.info("This is info message");

// find the time required by any method or function
console.time("For loop");
for (let i = 0; i < 5; i++) {
    console.log(78);
}
console.timeEnd("For loop");
