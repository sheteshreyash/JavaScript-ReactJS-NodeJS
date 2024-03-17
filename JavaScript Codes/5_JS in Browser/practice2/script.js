// console.log("Hi shrey")
// Write a program to change the url to google.com (Redirection) if user enters a number greater than 4.

let num1 = prompt("Enter the number");
num1 = Number.parseInt(num1);

if (num1 > 4) {
    location.href = "https://google.com";
}
