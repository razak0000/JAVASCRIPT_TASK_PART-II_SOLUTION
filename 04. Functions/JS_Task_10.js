// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
 function alphabeticalOrder(str) {
    return str.split('').sort().join('');
    }
console.log(alphabeticalOrder("Mohammad Razak A"))
 

/* --------------------------------------------------------------------------------- */