
// Cookies in JS
console.log(document.cookie)
document.cookie = "name=shrey1122334400"
document.cookie = "name2=shrey11223344002"
document.cookie = "name=shrey"
let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)