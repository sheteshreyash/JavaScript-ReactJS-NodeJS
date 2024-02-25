

// Static Methods of a class

class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name)
    }
    walk() {
        alert("Animal " + this.name + " is walking")
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

let j = new Animal("panther")
j.walk()
// console.log(j.capitalize("thisa"))   //  this doesn't work