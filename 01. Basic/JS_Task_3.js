// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are the same, then return triple their sum.  

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  

function sumAndTriple(a, b) {
    if (a === b) {
        return (a + b) * 3;
        } else {
            return a + b;
            }
            }

console.log(sumAndTriple(3,3));  //OUTPUT:18
console.log(sumAndTriple(5,7));  // Output: 12


/* --------------------------------------------------------------------------------- */