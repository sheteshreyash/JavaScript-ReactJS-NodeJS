// practice 1
// Write a program using prompt function to take input of age as
// a value from the user and use alert to tell him if he can drive.


let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true : false;
};

while (runAgain) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);

    if (age <= 0) {
        console.error("Enter valid age")
        alert("Please enter valid age")
        break;
    }

    if (canDrive(age)) {
    alert("You can Drive");
    } else {
    alert("You cannot drive");
    }
    runAgain = confirm("Do you want to continue?")
}
