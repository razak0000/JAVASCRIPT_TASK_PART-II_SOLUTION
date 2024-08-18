// Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function largestNumber(A) {
    let max = A[0];
    for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
    max = A[i];
    }
    }
    return max;
    }
    console.log(largestNumber([24, 53, 78, 91, 12])); // Output: 91
          


/* --------------------------------------------------------------------------------- */

