// map, filter and reduce methods in array

let numarr = [12, 234, 56, 88, 78];
console.log(numarr);

let a = numarr.map((value, index, array) => {
  // map function in arrays
  console.log(value, index, array); // map creates a new array by performing the same operation on each element
  return value * 2;
});
console.log(a);
console.log("\n"); // for each and map function in arrays are similar


let arr1 = [12, 234, 56, 88, 78, 78, 12, 234, 3, 0, -4];
console.log(arr1);

let a2 = arr1.filter((value) => {     // filter function
    return value < 10;
});
console.log(a2);
console.log("\n");


let a3 = arr1.reduce((h1, h2) => {    // reduce function
    return h1 + h2;
});
console.log(a3);
console.log("\n");
