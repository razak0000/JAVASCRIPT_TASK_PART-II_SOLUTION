// The distance between two cities (in km.) is input through the keyboard. 
// Write four functions to convert and print this distance in 
// meters, feet, inches and centimeters.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function convertToMeters(km) {
    let meters = km * 1000;
    console.log(`The distance in meters is ${meters} meters`);
}

function convertToFeet(km) {
    let feet = km * 3280.84;
    console.log(`The distance in feet is ${feet} feet`);
}

function convertToInches(km) {
    let inches = km * 39370.08;
    console.log(`The distance in inches is ${inches} inches`);
}

function convertToCentimeters(km) {
    let centimeters = km * 100000;
    console.log(`The distance in centimeters is ${centimeters} centimeters`);
}

function mainFunction() {
    let km = parseFloat(prompt("Enter the distance between two cities in km:"));
    convertToMeters(km);
    convertToFeet(km);
    convertToInches(km);
    convertToCentimeters(km);
}

mainFunction();


/* --------------------------------------------------------------------------------- */