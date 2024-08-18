// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. 
// Assume that employees do not work for fractional part of an hour.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function calculateOvertimePay(hoursWorked) {
    let overtimeHours = hoursWorked - 40;
    let overtimePay = overtimeHours * 12;
    return overtimePay;
}

function mainFunction() {
    let hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
    if (hoursWorked > 40) {
        let overtimePay = calculateOvertimePay(hoursWorked);
        console.log(`The overtime pay is Rs. ${overtimePay}`);
    } else {
        console.log("No overtime pay is applicable.");
    }
}

mainFunction();


/* --------------------------------------------------------------------------------- */