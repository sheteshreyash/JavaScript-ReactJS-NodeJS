// array methods in js

let numarr = [12, 234, 56, 88, 78]
console.log(typeof numarr)
console.log(numarr);

let b = numarr.toString()   // can change the type of array from num to string (array can be used as string)
console.log(b)

let c = numarr.join("_")  // joins to the every element of the array
console.log(c);
console.log(typeof c)

let d = numarr.pop() // removes the last element from the array and returns its value
console.log(numarr, d);

let e = numarr.push(6788); // pushed the new element into the array and returns position
console.log(numarr, e);

let f = numarr.push(52332); // can push elements of another datatypes and returns position
console.log(numarr, f);

let g = numarr.shift()  // removes the first element from the array and returns it
console.log(g, numarr);  // updated array after removing the first element

let h = numarr.unshift(100); // Adds 100 to the beginning of numarr
console.log(h, numarr);

let i = numarr.splice(2, 1) // removes the element at the given position and returns removed element
console.log(i, numarr)

let j = numarr.sort((a, b) => a - b)  // sorts the array and returns sorted array
console.log(j, numarr);