// Part 1 :- Error Object (custom Errors)
// try {
//     let age = prompt("Enter your age");
//     age = Number.parseInt(age);
//     if (age > 150) {
//         throw new ReferenceError("This is probably not true");
//     }
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }
// console.log("The script is still running");




// Part 2 :- Finally
const f = () => {
    try {
        let a = 0;
        // console.log(program)
        console.log("Program ran successfully");
        return;
    } catch (err) {
        console.log("This is an error");
        console.log(p);
    } finally {
        console.log("I am a good boy");
        // Close the file
        // Exit the Loop
        // Write to the log file
    }
};

f();
console.log("End");
