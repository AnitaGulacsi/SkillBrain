// Instructions
// As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.
// To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers. 
// The position of a certain card corresponds to the index in the array. 
// That means position 0 refers to the first card, position 1 to the second card etc.

// 1. Retrieve a card from a stack
// To pick a card, return the card at index position from the given stack.

let getItem = (array , position) => array[position] ;
    
console.log(getItem([1,2,4,1] , 2));

// 2. Exchange a card in the stack
// Perform some sleight of hand and exchange the card at index position 
// with the replacement card provided. Return the adjusted stack.

let setItem = (array , position , replacementCard) => {
    array[position] = replacementCard ;
    return array;
}

console.log(setItem([1,2,4,1,] , 2 , 6));

// 3. Insert a card at the top of the stack
// Make a card appear by inserting a new card 
// at the top of the stack. Return the adjusted stack.

let insertItemAtTop = (array , newCard) => { 
    array.push(newCard);
    return array;
}

console.log(insertItemAtTop([5 , 9 ,7 ,1], 8)) ;

// 4. Remove a card from the stack
// Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.

let removeItem = (array , position) => {
    array.splice(position , 1);
    return array;
};

console.log(removeItem([3 , 2, 6 , 4 , 8] , 2));

// 5. Remove the top card from the stack
// Make a card disappear by removing the card at the top of the stack. 
// Return the adjusted stack.

let removeItemFormTop = (array) => {
    array.pop() ;
    return array;
}

console.log(removeItemFormTop([3 , 2 , 6 , 4 , 8 ]));


// 6. Insert a card at the bottom of the stack
// Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.

let insertItemAtBottom = (array , newCard) => {
    array.unshift(newCard);
    return array;
    
};

console.log(insertItemAtBottom([5 , 9 , 7 ,1 ] , 8));

// 7. Remove a card from the bottom of the stack
// Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.

let removeItemAtBottom = (array) => {
    array.shift();
    return array;
};

console.log(removeItemAtBottom([8 , 5, 9 , 7 , 1]));

// 8. Check the size of the stack
//Check whether the size of the stack is equal to stackSize or not.

let checkSizeOfStack = (array , stackSize) => {
    if (array.length == stackSize ) {
        return true;
    }else {
        return false;
    }
};

console.log(checkSizeOfStack([3 , 2 ,6 , 4 , 8] , 4 ));
