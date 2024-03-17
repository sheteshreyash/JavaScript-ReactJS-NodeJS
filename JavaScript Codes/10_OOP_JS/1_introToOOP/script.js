

// Intro to OOP in js
// In programming we often take something and then extend it.
// For example we might want to create a user object and “admin” and “guest” will be
// slightly modified variants of it.

// JavaScript objects have a special property called prototype that is either null or references another object.

// When we try to read a property from a prototype and its missing,
// JavaScript automatically takes it from the prototype.This is called “prototype inheritance”


// Part 1 - Array Prototype
let a = {
    name2: "Shete",
    language: "JavaScript",
    run: () => {
        alert("self run")
    }
}
console.log(a)


let p = {
    run: () => {
        alert("run")
    }
}

p.__proto__ = {
    name: "Jackie"
}
a.__proto__ = p
a.run()
console.log(a.name)


// Setting Prototype :-
// We can set prototype by setting __proto__

// Now if we read a property from the object which is not in object and is present in the prototype,
// JS will take it from prototype.

// If we have a method in object, it will be called from the object.
// If its missing in object and present in prototype, it’s called from the prototype.





