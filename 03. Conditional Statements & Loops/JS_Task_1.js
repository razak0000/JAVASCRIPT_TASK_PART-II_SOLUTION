// Write a program that takes a character (number or string) in a variable & 
// checks whether the given input is a number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let input = prompt("Enter a character: ");

if (!isNaN(input)) {
  console.log("The input is a number.");
} else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
  console.log("The input is an uppercase letter.");
} else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
  console.log("The input is a lowercase letter.");
} else {
  console.log("The input is neither a number nor a letter.");
}


/* --------------------------------------------------------------------------------- */


