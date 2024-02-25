
// Exercise on chapter 10

// 1.    Create a JS class to create a complex number.Create a constructor to set the real and the complex part.
// 2.    Write a method to add two complex numbers in the above class.
// 5.    Use getters & setters to set and get the real and imaginary parts of the complex number.

class Complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary
    }
    set real(newReal) {
        this._real = newReal
    }
}

// printing complex number
let a = new Complex(2, 4)
a.real = 10
a.imaginary = 10
let b = new Complex(6, 2)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)

// printing real and imaginary part of the complex number
console.log(a.real, a.imaginary)







// 3.    Create a class student from a class Human. Override a method & see changes.
// 4.    See if Student is an instance of Human using instanceof keyword.

console.log("\n")
class Human {
    constructor(name, favfood) {
    this.name = name
    this.favfood = favfood
    }
    walk() {
    console.log(this.name + "Human is walking")
    }
}

class Student extends Human {
    walk() {
    console.log(this.name + ": Student is walking")
    }
}

let o = new Student("Shreyash", "Bhindi")
o.walk()
console.log(o instanceof Human)