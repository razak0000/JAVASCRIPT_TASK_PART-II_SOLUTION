// You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let sentence = "The quick brown fox jumps over the lazy dog";
let word = "the";
let count = 0;

sentence = sentence.toLowerCase(); // Convert the sentence to lowercase
word = word.toLowerCase(); // Convert the word to lowercase

let words = sentence.split(" "); // Split the sentence into an array of words

for (let i = 0; i < words.length; i++) {
  if (words[i] === word) {
    count++;
  }
}

console.log(`The word "${word}" occurs ${count} times in the sentence.`);


/* --------------------------------------------------------------------------------- */