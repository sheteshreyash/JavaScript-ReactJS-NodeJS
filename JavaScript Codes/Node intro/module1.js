const hello = ()=>{
    console.log("Hello Harry")
}

const ahello = (name)=>{
    console.log("Hello " + name)
}

export default {hello, ahello};// same as below line
// module.exports = {hello: hello, ahello: ahello};