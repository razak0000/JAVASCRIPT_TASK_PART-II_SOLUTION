// Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let currentDate = new Date();
let dayOfMonth = currentDate.getDate();

if (dayOfMonth < 16) {
  console.log("First fifteen days of the month");
} else {
  console.log("Last days of the month");
}


/* --------------------------------------------------------------------------------- */



