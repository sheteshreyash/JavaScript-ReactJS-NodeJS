// Create a Digital Seconds clock using setInterval and Date object in JS.
// The Date object can be used to get the date, time, hours and seconds which can be then be updated
// using setInterval.
// Try to keep the UI good looking.



function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

