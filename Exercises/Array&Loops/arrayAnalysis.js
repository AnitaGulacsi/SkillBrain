//  Instructions

// Elyse, magician - to - be, continues her training.She will be given several stacks of cards that she needs to perform her tricks.
// To make things a bit easier, she only uses the cards 1 to 10.
// In this exercise, use built-in methods to analyse the contents of an array.


// 1. Find the position of a card
// Elyse wants to know the position(index) of a card in the stack.

const getCardPosition = (array, card) => (array[card]);

console.log(getCardPosition([9, 7, 3, 2], 2));

//  2. Determine if a card is present
// Elyse wants to determine if a card is present in the stack-- in other words, if the stack contains a specific number.

const doesStackIncludeCard = (array, card) => {
   for (let i = 0; i < array.length; i++) {
        if (array[i] === card){
            return true;
        }
    }
    return false;
};

console.log(doesStackIncludeCard([2, 3, 4, 5], 4));

//  3. Determine if each card is even
// Elyse wants to know if every card is even-- in other words, if each number in the stack is an even number.

const isEachCardEven = (array) => {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]% 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }

    if (array.length === evenNumbers.length) {
        return true;
    } else {
        return false;
    }
};

console.log(isEachCardEven([2, 4, 6, 7]));

//  4. Check if the stack contains an odd-value card
// Elyse wants to know if there is an odd number in the stack.

const doesStackIncludeOddCard = (array) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0 ){
            return true;
        }
    }
    return false;
};

console.log(doesStackIncludeOddCard([8, 2, 6, 7, 8]));

//  5. Get the first odd card from the stack
// Elyse wants to know the value of the first card that is odd.

const getFirstOddCard = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            return array[i];
        }
    }
    return "The array does not contain any odd numbers "
};

console.log(getFirstOddCard([4, 2, 8, 7, 9]));

//  6. Determine the position of the first card that is even
// Elyse wants to know the position of the first card that is even.

const getFirstEvenCardPosition = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            return i;
        }
    }
    return "The array does not contain any even numbers"
};

console.log(getFirstEvenCardPosition([5, 3, 6, 1]));