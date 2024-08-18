// Write a JavaScript function that accepts a string as a parameter and find the longest 
// word within the string.
    // EXAMPLE STRING : 'Web Development Tutorial'
    // EXPECTED OUTPUT : 'Development'

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
            }
            }
        }

console.log(findLongestWord("web development Tutorial"));


/* --------------------------------------------------------------------------------- */