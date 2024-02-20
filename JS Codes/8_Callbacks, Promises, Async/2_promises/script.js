
// promises part 1
let promise = new Promise(function (resolve, reject) {
    alert("Hello");
    resolve(56);
});

console.log("Hello One");
setTimeout(function () {
    console.log("Hello Two in 2 seconds");
}, 2000);

console.log("My name is " + "Hello Three");
console.log(promise);

// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script



// promises part 2 - .then() and .catch() functions
let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am resolved")
        resolve(true);
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am rejected")
        reject(new Error("I am an error"));
    }, 5000);
});

// To get the value
p1.then((value) => {
    console.log(value);
});

// To catch the errors
p2.catch((error) => {
    console.log("some error occurred in p2")
})

p2.then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    }
);



// part 3 - promise chaining then
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds");
        resolve(56);
    }, 2000);
});

p4.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2");
        }, 2000);
    });
})
    .then((value) => {
        console.log("We are done");
        return 2;
    })
    .then((value) => {
        console.log("Now we are pakka done");
    });



// part 4 - Load-script using promises
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = (script) => {
            resolve("Script has been loaded sir");
        };
        script.onerror = () => {
            reject(0);
        };
    });
};

let p5 = loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
);
p5.then((value) => {
    console.log(value);
    return loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
    );
})
    .then((value) => {
        console.log("Second script ready");
    })
    .catch((error) => {
        console.log("We are sorry but we are having problems loading this script");
    });



// Part 5 :- Attaching multiple handlers to a promise
let p6 = new Promise((resolve, reject) => {
    // alert("Hey I am not resolved")
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

p6.then(() => {
    console.log("Hurray");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4);
        }, 6000);
    });
}).then((value) => {
    console.log(value);
});

p6.then(() => {
    console.log("Congratulations this promise is now resolved");
});
