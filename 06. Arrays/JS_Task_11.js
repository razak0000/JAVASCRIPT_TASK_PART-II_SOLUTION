// Write a program to store 3 student names in an array.Take another array to store 
// score of these three students. Assume that total marks are 500 for each student, 
// display the scores & percentages of students like:

// Score of David is 320. Percentage: 64%
// Score of Billa is 230. Percentage: 46%
// Score of Michael is 480. Percentage: 96%

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let studentNames = ["David", "Billa", "Michael"];
let studentScores = [320, 230, 480];

for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentScores[i] / 500) * 100;
    console.log(`Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage}%`);
}


/* --------------------------------------------------------------------------------- */