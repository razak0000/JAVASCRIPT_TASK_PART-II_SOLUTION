// A cashier has currency notes of denominations 10, 50 and 100. 
// If the amount to be withdrawn is input through the keyboard in hundreds, 
// find the total number of currency notes of each denomination the cashier will 
// have to give to the withdrawer.

// Example: Amount - 470. You will have 4 hundred notes 1 fifity notes 2 ten notes.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */ 
function calculateNotes(amount) {
    let hundredNotes = Math.floor(amount / 100);
    let remainingAmount = amount % 100;
    let fiftyNotes = Math.floor(remainingAmount / 50);
    remainingAmount = remainingAmount % 50;
    let tenNotes = Math.floor(remainingAmount / 10);

    console.log(`You will have ${hundredNotes} hundred notes, ${fiftyNotes} fifty notes, and ${tenNotes} ten notes.`);
}

let amount = parseInt(prompt("Enter the amount to be withdrawn:"));
calculateNotes(amount);
   
 

/* --------------------------------------------------------------------------------- */