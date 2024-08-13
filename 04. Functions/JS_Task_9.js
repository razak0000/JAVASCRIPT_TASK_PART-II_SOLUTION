// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  
function reverseNumber(x) {
    return parseInt(x.toString().split('').reverse().join(''));
}//changed it to string and splitted and reversed and joined

/* --------------------------------------------------------------------------------- */
