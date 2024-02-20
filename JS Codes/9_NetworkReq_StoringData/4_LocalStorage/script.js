

// localStorage & related methods is one of the most important methods in js-browser

let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
    localStorage.removeItem(key)
}

if (key == 0) {
    localStorage.clear()
}


// JSON.Stringify(object)    //Converts objects to JSON Strings
// JSON.parse(String)         //Converts string to objects (must be a valid JSON)
