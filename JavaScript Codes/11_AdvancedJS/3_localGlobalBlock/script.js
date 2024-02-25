

// Local, Global and block scaped variables.

let p = 9

function ax() {   // here a is block scoped variable
    let a = 8;
    console.log(p)
    console.log(a)
}

ax()
console.log(p)

console.log(a)   // this line will show error coz a is block scoped