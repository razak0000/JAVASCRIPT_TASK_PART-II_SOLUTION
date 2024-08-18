// Write a function that receives marks received by a student in 3 subjects and returns 
// the average and percentage of these marks. there should be 3 functions one is the 
// mainFunction and other are for average and percentage. Call those functions from 
// mainFunction and display result in mainFunction.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}

function calculatePercentage(average) {
    return (average / 100) * 100;
}

function mainFunction() {
    let marks1 = parseFloat(prompt("Enter marks in subject 1:"));
    let marks2 = parseFloat(prompt("Enter marks in subject 2:"));
    let marks3 = parseFloat(prompt("Enter marks in subject 3:"));

    let average = calculateAverage(marks1, marks2, marks3);
    let percentage = calculatePercentage(average);

    console.log(`The average marks are ${average}`);
    console.log(`The percentage is ${percentage}%`);
}

mainFunction();


/* --------------------------------------------------------------------------------- */