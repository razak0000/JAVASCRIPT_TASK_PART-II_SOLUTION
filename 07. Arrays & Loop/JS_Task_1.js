// Write a program to print multiplication table of any number using for loop. 
// Table number & length should be taken as an input from user.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */   
let numberOfMulptiplication = parseInt(prompt("Enter which multiplication Table you want"));
let lengthOfTable = parseInt(prompt("Enter the length of the table"));
for (let i = 1; i <= lengthOfTable; i++) {
    let result = numberOfMulptiplication * i;
    console.log(`${numberOfMulptiplication} * ${i} = ${result}`);
    }
    


/* --------------------------------------------------------------------------------- */

