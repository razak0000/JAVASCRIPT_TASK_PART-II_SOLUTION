// Write a JavaScript function to find a word within a string.
/* Test Data :
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times." */

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */   
function search_word(string, word) {
    let count = 0;
    let position = string.indexOf(word);
    while (position !== -1) {
        count++;
        position = string.indexOf(word, position + 1);
        }
        if (count > 0) {
            return "'" + word + "' was found " + count + " times.";
            } else {
                return "'" + word + "' was not found.";
                }
                }
                console.log(search_word('The quick brown fox', 'fox'));
                console.log(search_word('aa, bb, cc, dd, aa', 'aa'));            

/* --------------------------------------------------------------------------------- */