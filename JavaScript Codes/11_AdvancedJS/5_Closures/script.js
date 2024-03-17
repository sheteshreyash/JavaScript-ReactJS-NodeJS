
// closures in js

function init() {
        var name = 'Mozilla'; // name is a local variable created by init
        function displayName() {
                // displayName() is the inner function, a closure
                console.log(name); // use variable declared in the parent function
        }
        name = "Shreyash"   // closures will return the function along with its lexical environment
        return displayName;
}
let c = init();
c()



console.log("\n")
function returnFunc() {
        const x = () => {
                let a = 1
                console.log(a)
                const y = () => {
                        // let a = 2
                        console.log(a)
                        const z = () => {
                                // let a = 3
                                console.log(a)
                        }
                        z()
                }
                a = 999
                y()
        }
        return x
}
let a = returnFunc()
a()



// It is a JS feature in which the inner function has access to the outer function variables.
// Closure is created with the creation of a function.
// A JavaScript feature in which the inner function has access to the outer function variable is called a closure.

// It has access to its own scope.
// It has access to the variables of the outer function.
// It has access to the global variables.
