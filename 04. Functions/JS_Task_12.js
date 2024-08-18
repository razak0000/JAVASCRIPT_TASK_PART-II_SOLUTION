// Write a function that computes factorial of a number.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function factorial(n) {
    if (n === 0) {
        return 1;
        } else {
            return n * factorial(n - 1);
            }
            }
console.log(factorial(5));           

/* --------------------------------------------------------------------------------- */