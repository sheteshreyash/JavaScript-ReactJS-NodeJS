// Create a Digital Seconds clock using setInterval and Date object in JS.
// The Date object can be used to get the date, time, hours and seconds which can be then be updated
// using setInterval.
// Try to keep the UI good looking.



function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = "0" + month;
    }
    if (day.toString().length == 1) {
        day = "0" + day;
    }
    if (hour.toString().length == 1) {
        hour = "0" + hour;
    }
    if (minute.toString().length == 1) {
        minute = "0" + minute;
    }
    if (second.toString().length == 1) {
        second = "0" + second;
    }
    var dateTime =
        year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    return dateTime;
}

// example usage: realtime clock
setInterval(function () {
    currentTime = getDateTime();
    document.getElementById("time").innerHTML = currentTime;
}, 1000);

