// Write a program to generate your K-Electric bill in your browser. 
// All the amounts should be rounded off to 2 decimal places. Display the following fields:
    // a. Customer Name
    // b. Current Month
    // c. Number of units
    // d. Charges per unit
    // e. Net Amount Payable (within Due Date)
    // f. Late Payment Surcharge
    //  g. Gross Amount Payable (after Due Date)
    // Where,
        // Net Amount Payable (within Due Date) = Number of units * Charges per unit
        // Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */   
function generateKElectricBill(customerName, currentMonth, numberOfUnits, chargesPerUnit, latePaymentSurcharge) {
        let netAmountPayable = numberOfUnits * chargesPerUnit;
        let grossAmountPayable = netAmountPayable + latePaymentSurcharge;
        return {
            customerName,
            currentMonth,
            numberOfUnits,
            chargesPerUnit,
            netAmountPayable: Math.round(netAmountPayable * 100) / 100,
            latePaymentSurcharge: Math.round(latePaymentSurcharge * 100) / 100
            , grossAmountPayable: Math.round(grossAmountPayable * 100) /
            100
            };
            }
            let customerName = "John Doe";
            let currentMonth = "January";
            let numberOfUnits = 100;
            let chargesPerUnit = 1.5;
            let latePaymentSurcharge = 10;
            let bill = generateKElectricBill(customerName, currentMonth, numberOfUnits, chargesPerUnit
                , latePaymentSurcharge);
                console.log(bill);

/* --------------------------------------------------------------------------------- */