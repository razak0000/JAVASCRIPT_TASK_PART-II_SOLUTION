// Write a JavaScript function to sort the following array of objects by title value.
// Sample object :
/* var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ]; */

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */   
function sortLibrary(library) {
    return library.sort(function(a, b) {
        return a.title.localeCompare(b.title);
        });
        }

        var library = [ 
            { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
            { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
            { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
            ];
       
 console.log(sortLibrary(library));           

/* --------------------------------------------------------------------------------- */    