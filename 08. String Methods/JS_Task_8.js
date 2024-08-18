// Write a JavaScript program to find the most frequent character in a given string.
/* Test Data :
("Madam") -> "a"
("civic") -> "c"
("HellloL223LLL") -> "L"
(12321) -> "It must be a string." */

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function mostFrequentChar(str) {
    if (typeof str !== 'string') {
        return "It must be a string.";
        }
        let charCount = {};
        for (let char of str) {
            if (char in charCount) {
                charCount[char]++;
                } else {
                    charCount[char] = 1;
                    }
                    }
                    let maxCount = 0;
                    let mostFrequent = '';
                    for (let char in charCount) {
                        if (charCount[char] > maxCount) {
                            maxCount = charCount[char];
                            mostFrequent = char;
                            }
                            }
                            return mostFrequent;
                            }
 console.log(mostFrequentChar("Madam")); // "a"




/* --------------------------------------------------------------------------------- */