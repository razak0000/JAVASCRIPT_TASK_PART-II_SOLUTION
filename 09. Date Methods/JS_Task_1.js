// Write a program that displays current date and time in your browser.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
// Get the current date and time
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
let formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

// Display the current date and time
alert(formattedTime);

// Update the time every second
setInterval(function() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm
    alert(formattedTime);
}, 1000);
/* --------------------------------------------------------------------------------- */



