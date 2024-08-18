// Write a JavaScript function to find an array containing a specific element.

/* 
Test data :
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True] 
*/

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function contains(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
            }
            }
            return false;
            }
            console.log(contains([2, 5, 9, 6], 5));
            console.log(contains([2, 5, 9, 6], 7));
            console.log(contains([2, 5, 9, 6], 6));
            console.log(contains([2, 5, 9, 6], 9));
            console.log(contains([2, 5, 9, 6], 2));
            console.log(contains([2, 5, 9, 6], 1));
            console.log(contains([2, 5, 9, 6], 3));
            console.log(contains([2, 5, 9, 6], 4));

/* --------------------------------------------------------------------------------- */    