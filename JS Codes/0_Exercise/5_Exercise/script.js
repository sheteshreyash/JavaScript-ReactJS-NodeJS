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



const terminal = document.getElementById("terminal");

function typeMessage(message, delay) {
    return new Promise((resolve) => {
    setTimeout(() => {
      terminal.innerHTML += message + "<br>";
      terminal.scrollTop = terminal.scrollHeight;
      resolve();
    }, delay);
  });
}

async function hack() {
  await typeMessage("Initializing Network", 1000);
  await typeMessage("Connecting to service...", 1500);
  await typeMessage("Retrieving username...", 2000);
  await typeMessage("Username found...", 1000);
  await typeMessage("Trying a combination of 4.5 Trillion passwords...", 2000);
  await typeMessage("Password found...", 1000);
  await typeMessage("Connecting to Facebook...", 1500);
  // You can add more steps here
}

hack();
