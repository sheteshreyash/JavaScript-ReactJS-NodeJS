console.log("Alert, Prompt and Confirm commands in js");

alert("Enter the Value of a");
let a = prompt("Enter Value of a");
a = Number.parseInt(a);
alert("You Enter a of type " + (typeof a))
let write = confirm("Do you want to write it to the page ?");
if (write) {
    document.write(a);
}
else {
    document.write("Please give me access to write")
}