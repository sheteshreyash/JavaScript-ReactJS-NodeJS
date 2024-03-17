
// Hoisting in js


// let a;   // will show error of initialization error

// Following line will run successfully due to JavaScript hoisting
console.log(a)

// greet()   // show error greet is not a function, var cannot host function expressions
// var greet = function () {
//     console.log("Good morning")
// }

greet()   // this will successfully print a message
function greet() {
    console.log("Good morning")
}

// greet1()   // show error of initialization
// let greet1 = function () {
//     console.log("Good morning")
// }


var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)