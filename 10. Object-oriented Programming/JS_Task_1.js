// Suppose You have an array of object
// var itemsArray = [
    // {name:”juice”,price:”50”, quantity:”3”},
    // {name:”cookie”,price:”30”, quantity:”9”},
    // {name:”shirt”,price:”880”, quantity:”1”},
    // {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  
var itemsArray = [
    {name: "juice", price: 50, quantity: 3},
    {name: "cookie", price: 30, quantity: 9},
    {name: "shirt", price: 880, quantity: 1},
    {name: "pen", price: 100, quantity: 2}
    ];
    var totalPrice = 0;
    for (var i = 0; i < itemsArray.length; i++) {
        var item = itemsArray[i];
        var itemPrice = item.price * item.quantity;
        totalPrice += itemPrice;
        console.log("Item name: " + item.name + ", Item price: " + item.price + ", Quantity: " + item.quantity + ", Total price: " + itemPrice);
            }
            console.log("Total price of all items: " + totalPrice);
            

/* --------------------------------------------------------------------------------- */


