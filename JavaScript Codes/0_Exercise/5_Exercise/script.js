// Write a javascript program to pretend to look like a hacker
// Try to emulate a terminal using javascript logic and it should look to others as if you are hacking a system
// Try to display messages like:
// Initializing Network
// Connecting to service...
// Retreiving username...
// Username found....
// Trying a combination of 4.5 Trillion passwords...
// Password found...
// Connecting to Facebook...

// Fool your friends into thinking that you are a hacker and have fun
// PRO TIP: Try to use a green text on a black background



// let a = [
//   "Initializing Hack tool...",
//   "Connecting to Facebook...",
//   "Connecting to server 1...",
//   "Connection failed. Retrying...",
//   "Connecting to server 2",
//   "Connected Successfully...",
//   "Username iamshreyash...",
//   "Trying Brute Force...",
//   "200K passwords tried...",
//   "Match not found",
//   "Another 200K passwords tried...",
//   "Match not found...",
//   "Another 200K passwords tried...",
//   "Match not found...",
//   "Another 200K passwords tried...",
//   "Match found...",
//   "Accessing Account...",
//   "Hack Successful..."
// ]

// const sleep = async (seconds) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => { resolve(true) }, seconds * 1000)
//   })
// }

// const showHack = async (message) => {
//   await sleep(2)
//   // console.log(message)
//   text.innerHTML = text.innerHTML + message + "<br>"
// }

// (async () => {
//   for (let i = 0; i < a.length; i++) {
//     await showHack(a[i])
//   }
// })()






const genCode = () => {
  let code = '';
  while (code.length < 1000) {
    code = code.concat(Math.floor(Math.random() * 2));
  }
  return code;
}

let check = Array.from(document.getElementsByClassName("check"))

function checkall() {
  if (check[2].checked) {
    check[0].checked = true
    check[1].checked = true
  }
}
function hack() {
  let side = Array.from(document.getElementsByClassName("side1"));
  let clear1 = setInterval(() => {
    side[0].innerHTML = genCode();
  }, 300)
  let clear2 = setInterval(() => {
    side[1].innerHTML = genCode();
  }, 250)
  let text = Array.from(document.getElementsByClassName("text"))
  let target = document.getElementById("target").value;

  // Async Await

  const hackapi = async function () {
    // clear screen
    {
      for (let i = 1; i < text.length; i++) {
        text[i].innerHTML = " "
      }
    }
    // screen cleared

    let step1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[1].innerHTML = "Hijacking user..."
        resolve(1)
      }, 1000)
    })
    let step2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "user located"
        resolve(1)
      }, 1000)
    })
    let step1a = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = `username:${target} ; `
        resolve(1)
      }, 1000)
    })
    let step1b = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML += ` password:XXXXXXX ;`
        resolve(1)
      }, 500)
    })
    let step1c = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML += ` number:+91XXXXXXXXXX`
        resolve(1)
      }, 800)
    })
    let step3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[3].innerHTML = "getting device info..."
        resolve(1)
      }, 1000)
    })
    if (check[0].checked) {
      let step5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[4].innerHTML = "facebook hacked"
          resolve(1)
        }, 1000)
      })
    }
    if (check[1].checked) {
      let step5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[4].innerHTML = "Instagram hacked"
          resolve(1)
        }, 1000)
      })
    }
    let step5 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[4].innerHTML = "resetting passwords..."
        resolve(1)
      }, 1000)
    })
    let step6 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "access granted to phone"
        resolve(1)
      }, 1000)
    })
    let step7 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "logs generated"
        resolve(1)
      }, 1000)
    })
    let step8 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[5].innerHTML = "hacking status: pending..."
        resolve(1)
      }, 1000)
    })
    let step9 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[5].innerHTML = "hacking status: hacked! succesfully -_+"
        resolve(1)
        clearInterval(clear1)
        clearInterval(clear2)
        side.forEach((x) => {
          x.innerHTML = "Hacker Man"
        })
      }, 3000)
    })
  }
  hackapi()
}


