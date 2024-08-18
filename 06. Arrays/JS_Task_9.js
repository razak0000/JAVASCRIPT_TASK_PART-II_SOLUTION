// Write a JavaScript function to move an array element from one position to another.

/* Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40] */

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function move(arr, from, to) {
    if (from === to) {
        return arr;
        }
        let temp = arr[from];
        arr.splice(from, 1);
        arr.splice(to, 0, temp);
        return arr;
        }
        console.log(move([10, 20, 30, 40, 50], 0, 2));
       
        console.log(move([10, 20, 30, 40, 50], -1, -2));//[10, 20, undefined, 30, 40]
             

        

/* --------------------------------------------------------------------------------- */    