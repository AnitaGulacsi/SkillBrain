//  Instructions

// As a budding magician, Elyse needs to analyze her deck in lots of different ways. 
// To keep things simple, she only uses cards with values 1 - 10.


// 1. Determine how many cards of a certain type are in the deck
// Elyse wants to know how many cards of a particular type she has in her deck.
// Write a function cardTypeCheck that takes two parameters: an array of cards(Elyse's deck) and the type of card to count. 
// The function should use forEach and return the number of cards in the deck of the specified type.

const cardTypeCheck = (array, cardType) => {
    let cards = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == cardType) {
            cards.push(array[i])
        }
    }

    return cards.length;
};

console.log(cardTypeCheck([1, 3, 3, 4], 3));

// 2. Determine how many odd or even cards there are
// For another trick, Elyse needs to know how many odd or even cards there are in her deck.
// Implement a function determineOddEvenCards that takes in two parameters: an array of cards
//     (Elyse's deck), and a boolean (true is analogous to 'even', and false is analogous to 'odd').
// This function should return a single number: the number of odd or even cards there are(depending on the value of the second argument) in the deck. 
// To practice, use a for...of loop in the function implementation this time.

const determinatedOddEvenCards = (array, boolean) => {
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 ) {
            evenNumbers.push(array[i]);
        } else {
            oddNumbers.push(array[i]);
        }
    }

    if (boolean == true) {
        return evenNumbers.length;
    } else {
        return oddNumbers.length;
    }
};

console.log(determinatedOddEvenCards([1, 2, 3, 1, 5, 6], true));

 const determineOddEvenCardsForOf = (deck,booleanValue) => {
    let counter = 0;
    for (const card of deck) {
      if (booleanValue === true && card % 2 == 0 ) {
        counter += 1
      }
      else if (booleanValue === false && card % 2 !== 0 ){
        counter += 1
      }
    } 
    console.log(counter)
  }
  
console.log(determineOddEvenCardsForOf([1, 2, 3, 1, 5, 6], true));
console.log(determineOddEvenCardsForOf([1, 2, 3, 1, 5, 6], false));