// Write a program that alerts the current month in words.
// For example August.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */   
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date();
let currentMonth = months[currentDate.getMonth()];

alert(currentMonth);
    

/* --------------------------------------------------------------------------------- */