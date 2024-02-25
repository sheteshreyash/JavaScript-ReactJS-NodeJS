// string literals in js

let name1 = "Shreyash";
console.log(name1);
// console.log(typeof name1)
console.log(name1[0]);

// let namee2 = 'prakriti'
// console.log(namee2)



//template literals - string interpolation
let boy1 = "shete";
let boy2 = "ors";

let sentence = `${boy1} is a friend of ${boy2}`; // use of backtic
console.log(sentence);



// Escape sequence characters in string literals
let fruit = "Pine\n apple"   // newline
console.log(fruit)
let fruit2 = "Pine\t apple"   // tab (4 letters)
console.log(fruit2)
let fruit3 = "Pine\r apple"    //carriage return (basically deletes the string numbers before \r)
console.log(fruit3)
