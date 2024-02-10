// Loops in array

let numarr = [12, 234, 56, 88, 78];
console.log(numarr)

// classical for loop
for (let i = 0; i < numarr.length; i++) {
    console.log(numarr[i])
}
console.log("\n")


// for each loop
numarr.forEach((elem) => {
    console.log(elem*elem)
})
console.log("\n");


// Array from
let shrey = 'SHETEISBEST'
let arr2 = Array.from(shrey)
console.log(arr2)
console.log("\n");


// for of loop
for (let i of numarr) {
    console.log(i)
}
console.log("\n");


// for in loop
for (let i in numarr) {
    console.log(numarr[i]);
}
console.log("\n");