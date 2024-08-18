// Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
var num = 35.36;
var numStr = num.toString();
numStr = numStr.replace(/\./g, '');
console.log(numStr); // Output: "3536"


/* --------------------------------------------------------------------------------- */