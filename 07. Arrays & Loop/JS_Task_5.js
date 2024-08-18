// You have an array. A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. 

// Example:
// cookie - cookie is available at index 2 in our bakery
// pastry - We are sorry. pastry is not available in our bakery

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter the item you want to search in the bakery: ");
let index = bakery.indexOf(searchItem);
if (index !== -1) {
    alert(`${searchItem} is available at index ${index} in our bakery`);
    } else {
        alert(`We are sorry. ${searchItem} is not available in our bakery`);
        }
        

/* --------------------------------------------------------------------------------- */