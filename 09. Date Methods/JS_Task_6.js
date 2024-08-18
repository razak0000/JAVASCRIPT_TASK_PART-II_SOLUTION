// Write a program that alerts the first 3 letters of the current day, for example if today 
// is Sunday then alert will show Sun.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */   
let today = new Date();
let day = today.toLocaleString('en-US', { weekday: 'short' });
let firstThreeLetters = day.substring(0, 3);
alert(firstThreeLetters);


/* --------------------------------------------------------------------------------- */