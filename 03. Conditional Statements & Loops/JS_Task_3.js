// Write a program that
    // a. Store correct password in a JS variable.
    // b. Asks user to enter his/her password
    // c. Validate the two passwords:
        // i. Check if user has entered password. If not, then give message “ Please enter your password”
        // ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show "Incorrect password" otherwise.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let originalPassword = "mysecretpassword";
let userPassword = prompt("Please enter your password");
  if(originalPassword === userPassword)
  {
    alert("Correct! The password you entered matches the original password");
  }
  else
  {
    alert("Incorrect password");
  }

/* --------------------------------------------------------------------------------- */