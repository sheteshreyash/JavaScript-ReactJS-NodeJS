// arrays in js
// arrays are mutable, means arrays can be modified

let a = [13, 45, 56, 23]
let b = [56, 'Shery', false, null, undefined]   // js allows to store multiple datatypes in same array
console.log(b)
console.log(a[89])
console.log(b.length)  // length of the array
b[3] = 567
console.log(b)


// in js, arrays are objects. the typeof operator on arrays returns object
console.log(typeof b)  // returns object

// printing the elements of the array
for (let i = 0; i < b.length; i++) {
    console.log(b[i])
}