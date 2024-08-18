// Write a program to take password as an input from user. 
// The password must qualify these requirements:
    // a. It should contain alphabets and numbers
    // b. It should not start with a number
    // c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let password = prompt("Enter your password");
while (password.length < 6 || !/^[a-zA-Z]/.test(password) ||!/[\d]/.test(password))
     {
        password = prompt("Invalid password. Please enter a valid password.");
        }
        alert("Password is valid");
        console.log(password);

/* --------------------------------------------------------------------------------- */



