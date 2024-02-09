// string properties and methods in js

let name1 = 'Express"ion';
let fri = "shreyash";
let fryye = "      cryyy     ";
console.log(name1.length);
console.log(name1.toUpperCase()); // convert to uppercase
console.log(name1.toLowerCase()); // convert to lowercase
console.log(name1.slice(0, 5));
console.log(name1.slice(0));
console.log(name1.replace("Exp", "Shreyyy")); // find and replace
console.log(name1.concat(" Likes ", fri, " OK"));
console.log(fryye.trim()); // removes unwanted extra whitespaces


const str1 = "Saturday night plans";
console.log(str1.startsWith("Sat"));
console.log(str1.startsWith("Sat", 3));
console.log(str1.endsWith("best!"));

// strings in js are immutable (cannot be changed)
// original string never changes


// quiz
console.log("shr\"".length)





