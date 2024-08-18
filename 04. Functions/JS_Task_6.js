// Write a JavaScript function to extract unique characters from a string.

// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */ 
function extractUniqueChars(str) {
    let uniqueChars = new Set();
    for (let char of str) {
        uniqueChars.add(char);
       }
       return Array.from(uniqueChars).join('');
       }
       console.log(extractUniqueChars("thequickbrownfoxjumpsoverthelazydog")); //Output : "thequickbrownfxjmpsvlazydg"

/* --------------------------------------------------------------------------------- */