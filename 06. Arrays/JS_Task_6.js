// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a 
// given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function findPair(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let currentSum = numbers[left] + numbers[right];
        if (currentSum === target) {
            return [left, right];
            } else if (currentSum < target) {
                left++;
                } else {
                    right--;
                    }
                    }
                    return null;
                    }
 let numbers= [10,20,10,40,50,60,70] ;
 let target = 50;
 let result = findPair(numbers, target);
 if (result !== null) {
    console.log(`Pair found at indices ${result[0]} and ${result[1]}`);
    } else {
        console.log("No pair found");
        }
        

/* --------------------------------------------------------------------------------- */    