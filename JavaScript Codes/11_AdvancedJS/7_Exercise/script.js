
// practice set on chapter 11

// 1. Write a JS program to print the following after 2 second delay
// Hello
// World
console.log("\n")
const a = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 1000 * n)
    })
}

(
async () => {
    let text = await a("Hello")
    console.log(text)
    text = await a("World")
    console.log(text)
}
)()




// 2. Write a JS program to find average of numbers in an array using spread syntax.
console.log("\n")
function sum(a, b, c) {
    return a + b + c
}

let x = [1, 3, 5]
console.log(sum(...x));



// 3. Write a JS function which resolves a promise after n seconds.The function takes n as the parameter.
// Use an IIFE to execute the functions with different values of n.
    (async () => {
    let text = await a("I am resolving after 1 second", 1)
    console.log(text)
    text = await a("I am resolving after 4 seconds", 4)
    console.log(text)
}
)()



// 4. Write a simple interest calculator using JS.
console.log("\n")
function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

console.log(simpleInterest(100, 5, 1))
console.log("\n")
