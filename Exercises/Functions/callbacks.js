// Instructions
// You are creating a new online portal for your patrons to order their fruit fresh from the grocer. 
// The grocer has an API that you can use to see if they have the inventory desired by your customers. 
// You need to create a small library of functions for interacting with the grocer's API.

// 1. Check if the grocer's service is online
// The grocer's application programming interface [API] provides a function to check if their service is online called checkStatus.
// Use the grocer's function to finish the implementation of your isServiceOnline function. 
// The checkStatus function takes a callback function to receive the status from the API.
// if the status is 'ONLINE', return true
// if the status is 'OFFLINE', return false

const isServiceOnline = (status) => {
    if ( status === "online" || status === "Online") {
        return true;
    } else if ( status === "offline" || status === "Offline") {
        return false;
    } else {
        return ("Did not provide a status");
    }
};

console.log(isServiceOnline());

// 2. See if the grocer has some fruit
// The grocer's API provides a function to query their inventory called checkInventory. It receives two arguments: a query, and a callback function.
// The query takes the form of an object:
// const query = {
//     variety: string,
//     quantity: number,
// };
// For your pickFruit function, you have decided to generalize it and just pass along a callback. 
// So using the arguments variety and quantity finish the function to call the checkInventory API.

//do this 

// 3. Create a callback to buy fruit if the inventory is available
// Finish the purchaseInventoryIfAvailable callback function to be used with the grocer's checkInventory API function. 
// The API function expects callback functions to accept two arguments, err and isAvailable. If an error occurs when checking the inventory, a string is returned to err. 
// If there is no error, the value is null. isAvailable is a boolean value, but if there is an error it is undefined.
// To finish purchaseInventoryIfAvailable, throw a new error if err is not null. Otherwise, return 'PURCHASE' if isAvailable is true or 'NOOP' if false.

const purchaseInventoryIfAvailable = (err , isAvailable) => {
    if (isAvailable && err === null) {
        console.log("PURCHASE");
    } else if (!isAvailable && err === null) {
        console.log("NOOP");
    } else {
        console.log("Throws new error Server Offline");
    }
};

purchaseInventoryIfAvailable( null, false);

// 4. Put it all together
// You notice that you're using pickFruit and purchaseInventoryIfAvailable so you decide to DRY up your code by extracting the code into a separate function called pickAndPurchaseFruit.
// Reuse pickFruit and purchaseInventoryIfAvailable to finish this function.
