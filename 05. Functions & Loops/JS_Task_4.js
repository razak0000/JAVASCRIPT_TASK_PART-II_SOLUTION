// If the lengths of the sides of a triangle are denoted by a, b, and c, then 
// area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    let S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

let a = parseFloat(prompt("Enter the length of side a:"));
let b = parseFloat(prompt("Enter the length of side b:"));
let c = parseFloat(prompt("Enter the length of side c:"));

let area = calculateArea(a, b, c);

console.log(`The area of the triangle is ${area}`);
  

/* --------------------------------------------------------------------------------- */