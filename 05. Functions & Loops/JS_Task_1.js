// Write a custom function power ( a, b ), to calculate the value of a raised to b.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */   
function power(a, b) {
 if (b === 0) {
    return 1;
    } else if (b < 0) {
        return 1 / power(a, -b);
        } else {
            return a * power(a, b - 1);
            }
            }
console.log(1,3);

/* --------------------------------------------------------------------------------- */


