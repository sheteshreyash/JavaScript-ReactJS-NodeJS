// Part 1 - Changing HTML Classes using JavaScript: className and classList
first.className = "text-black red";
console.log(first.classList);
console.log(first.classList.toggle("yellow"));
// console.log(first.classList.toggle("red"));
console.log(first.classList.contains("yellow"));



// Part 2 - setInterval and setTimeout
document.write("hello");

const sum = (a, b, c) => {
    console.log("Yes i am running  " + (a+b+c));
    a + b;
};
setTimeout(sum, 2000, 45, 45, 10);

// setInterval(function(){
//     alert("This is setInterval")
// }, 3000);


// let a = setTimeout(function () {
//   alert("I am inside of setTime function");
// }, 3000);
// let b = prompt("Do you want to continue setTimeout ?");
// if ("n" == b) {
//   clearTimeout(a);
// }
// console.log(a);



