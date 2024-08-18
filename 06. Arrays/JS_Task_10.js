// Write a JavaScript program that takes an array of integers and returns false 
// if every number is not prime. Otherwise, return true.

/* Test Data :
([2,3,5,7]) -> true
([2,3,5,7,8]) -> false */

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function allPrimes(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) {
            return false;
        }
    }
    return true;
}

console.log(allPrimes([2, 3, 5, 7])); // true
console.log(allPrimes([2, 3, 5, 7, 8])); // false
/* --------------------------------------------------------------------------------- */    