// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
    // • Pass the radius to the function.
    // • Calculate the circumference based on the radius, and output
        // "The circumference is NN".
// Create a function called calcArea:
    // • Pass the radius to the function.
    // • Calculate the area based on the radius, and output 
        // "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
    function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}`);
    }
   function calcArea(radius) {
    let area = Math.PI * radius ** 2; 
    console.log(`The area is ${area}`);
    }
    calcCircumference(5);
    calcArea(5);

/* --------------------------------------------------------------------------------- */