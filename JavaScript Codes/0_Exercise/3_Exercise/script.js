console.log("Running Tell me a Joke Script..")

// Array of jokes (you can replace this with any source of jokes)
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "I told my computer I needed a break, and now it won’t stop sending me vacation ads.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a snowman with a six-pack? An abdominal snowman."
];

function displayRandomJoke() {   // Function to display a random joke
    const jokeContainer = document.getElementById("joke-container");
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeContainer.innerHTML = `<p>${jokes[randomIndex]}</p>`;
}

window.onload = displayRandomJoke;   // Display a random joke when the page loads





