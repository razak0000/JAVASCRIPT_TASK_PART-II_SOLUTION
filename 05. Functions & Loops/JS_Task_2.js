// Write a function to delete all vowels from a sentence. Assume that the sentence 
// is not more than 25 characters long.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function deleteVowels(sentence) {
    let vowels = 'aeiouAEIOU';
    let result = '';
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i];
            }
            }
            return result;
            }
console.log(deleteVowels(MohammadRazak));

/* --------------------------------------------------------------------------------- */



