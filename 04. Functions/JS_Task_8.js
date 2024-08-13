// Write a JavaScript function that takes an array of numbers and finds the second lowest 
// and second greatest numbers, respectively.
// Sample array : [100,200,300,400,500]
// Expected Output : 200,400

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  
function findSecondLowestAndGreatest(arr) {
    // Remove duplicates and sort the array in ascending order
    let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);

    // Check if the array has at least 3 unique elements
    if (uniqueArr.length < 3) {
        return "Array must have at least 3 unique elements";
    }

    // Find the second lowest and second greatest numbers
    let secondLowest = uniqueArr[1];
    let secondGreatest = uniqueArr[uniqueArr.length - 2];

    return [secondLowest, secondGreatest];
}

// Test the function
let arr = [100, 200, 300, 400, 500];
console.log(findSecondLowestAndGreatest(arr)); // Output: [200, 400]

/* --------------------------------------------------------------------------------- */