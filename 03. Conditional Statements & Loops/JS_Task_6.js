// Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let a = prompt('enter a single character')[0];
if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u')
{
    alert(`${a} is a vowel`);
}
else if(a === 'A' || a === 'E' || a === 'I' || a === 'O' || a === 'U'){
    alert(`${a} is a vowel`);
}
else{
    alert(`${a} is not a vowel`);
}

/* --------------------------------------------------------------------------------- */