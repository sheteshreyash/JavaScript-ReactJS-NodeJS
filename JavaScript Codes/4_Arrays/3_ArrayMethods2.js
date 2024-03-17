// more array methods in js

let numarr = [12, 234, 56, 88, 78];
let num1 = [1, 23, 5, 8, 7, 'shrey'];

// console.log(numarr.length);
// console.log(numarr);

delete numarr[0]   // delete the element at index
console.log(numarr);
console.log(numarr.length);  // length of the array remains same after deletion operation


let newArr = numarr.concat(num1)  // concatenates the elements of the arrays
console.log(newArr)    // original array does not need to be changed
console.log(newArr.length)


// sort method
let compare = (a, b) => {
    return a - b;  // ascending sorting
}
num1.sort(compare)
console.log(num1)

let compare1 = (a, b) => {
  return b - a; // descending sorting
};
num1.sort(compare1);
console.log(num1);


num1.reverse()   // simply reverses the array
console.log(num1);


//splice and slice
numarr.splice(0, 2, 1011, 1033)  // index, count of numbers to delete and values of the numbers to fill the array
console.log(numarr)  // splice method modifies the original array

let newar = numarr.slice(3)  // slice method do not modifies the original array
console.log(newar)  // returns new array