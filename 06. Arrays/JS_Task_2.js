// Initialize an array with color names. Display the array elements in your browser.
    // a. Ask the user what color he/she wants to add to the beginning & add that 
    // color to the beginning of the array. Display the updated array in your browser.
    // b. Ask the user what color he/she wants to add to the end & add that color to the 
    // end of the array. Display the updated array in your browser.
    // c. Add two more color to the beginning of the array. Display the updated array in your browser.
    // d. Delete the first color in the array. Display the updated array in your browser.
    // e. Delete the last color in the array. Display the updated array in your browser.
    // f. Ask the user at which index he/she wants to add a color & color name. 
    // Then add the color to desired position/index. Display the updated array in your browser.
    // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she 
    // wants to delete. Then remove the same number of color(s) from user-defined position/index. 
    // Display the updated array in your browser.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let colors = ["red", "green", "blue", "yellow", "purple", "orange" ];
console.log(colors);
let addColor = prompt("Enter a color to add to the beginning of the array: ");
colors.unshift(addColor);
console.log(colors);
let addColor2 = prompt("Enter a color to add to the end of the array: ");
colors.push(addColor2);
console.log(colors);
colors.unshift("pink", "black");
console.log(colors);
colors.shift();
console.log(colors);
colors.pop();
console.log(colors);
let addColor3 = prompt("Enter a color to add at a specific index: ");
let addIndex = prompt("Enter the index where you want to add the color: ");
colors.splice(addIndex, 0, addColor3);
console.log(colors);
let deleteColor = prompt("Enter the index where you want to delete the color: ");
let deleteCount = prompt("Enter the number of colors you want to delete: ");
colors.splice(deleteColor, deleteCount);
console.log(colors);


/* --------------------------------------------------------------------------------- */