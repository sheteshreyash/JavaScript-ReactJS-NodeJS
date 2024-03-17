//  arithmetic operators
let a = 56
let b = 5

console.log("a + b =  ", a + b)
console.log("a - b =  ", a - b)
console.log("a / b =  ", a / b)
console.log("a * b =  ", a * b)
console.log("a ^ b =  ", a ** b)  // exponentiation operator
console.log("a % b =  ", a % b)

console.log("a++ =  ", a++) // postincrement
console.log("a =  ", a);  // updated value of a after a++
console.log("a-- =  ", a--) // postdecrement
console.log("a =  ", a);  // updated value of a after a--
console.log("++a =  ", ++a);  // preincrement
console.log("a =  ", a);  // updated value of a after ++a
console.log("--a =  ", --a);  // predecrement
console.log("a =  ", a);  // updated value of a after --a


// assignment operators
a = 9
a += 9
a -= 9
a *= 9
a /= 9
a %= 5
a **= 9
console.log(a)


// comparison operators
let com1 = 9
let com2 = "9"
console.log("com1 == com2", com1 == com2)  // returns boolean value
console.log("com1 != com2", com1 != com2)  // returns boolean value
console.log("com1 === com2", com1 === com2)  // to check the equality of datatypes
console.log("com1 !== com2", com1 !== com2)  // to check the inequality of datatypes


//logical operators
let x = 9
let y = 20
console.log(x < y && x == 9)  // logical and operator
console.log(x > y || x == 9)  // logical or operator


// Note that prompt and alert these two are not supported by node engines at all.