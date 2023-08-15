// Instructions
// Elyse, magician-to-be, continues her training. 
// She will be given a deck of cards and attempt to transform that deck. 
// She will make certain cards appear, disappear, change their values, or completely rearrange themselves. 
// To make things easier, she usually only starts with cards numbered 1 to 10, although some of the tricks may result in larger cards being created.


// 1. Double every single card
// Elyse wants to double the number of every card in the deck. This may result in higher cards than 1-10.

let seeingDouble = (deck) => {
    let newDeck = [];
    for (let i = 0; i < deck.length; i++) {
       let doubleIt =  deck[i] * 2 ;
        newDeck.push(doubleIt);
    }
    return newDeck;
};

console.log(seeingDouble([1 , 2 , 3, 4 , 10]));

// 2. Create multiple copies of every 3 found in the deck
// Elyse wants to triplicate every 3 found in the deck. If a deck started with a single 3, 
// after the trick the deck would have three 3's in place of the original.

let threeOfEachThree = (deck) => {
    let newDeck = [];
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] == 3) {
            newDeck.push(3);
            newDeck.push(3);
            newDeck.push(3);
        }else {
            newDeck.push(deck[i])
        }
    }
    return newDeck;
};

console.log(threeOfEachThree([1 , 3 , 9 , 3 , 7]));

// 3. Find two cards from the exact middle of the deck
// Elyse will take a deck of ten cards, and make every card disappear except the middle two cards.

let middleTwo = (deck) => {
    let middleCalculator = deck.length / 2 ;
    let firstArray = deck.slice(0 , middleCalculator);
    let secondArray = deck.slice(middleCalculator);
    let twoMiddleCard = [] ;
    
    twoMiddleCard.push(firstArray.pop());
    twoMiddleCard.push(secondArray.shift());

    return twoMiddleCard;

};

console.log(middleTwo([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]));

// 4. The outside two cards will reappear in the middle of the deck
// Elyse wants to move the top and bottom cards of the deck into the middle, in reverse order.
// You can assume that the deck has an even number of cards.

let sandwichTrick = (deck) => {
    let middleCalculator = deck.length / 2 ;
    let firstArray = deck.slice(0 , middleCalculator);
    let secondArray = deck.slice(middleCalculator);
    let newDeck = [];

    newDeck.push(firstArray);
    newDeck.push(secondArray.pop());
    newDeck.push((firstArray.shift()));
    newDeck.push(secondArray);

    return newDeck.flat();

};

console.log(sandwichTrick([1 , 2 , 3 , 5 , 6  , 10]));

// 5. Every card that isn't 2 disappears
// Elyse's favorite number today is 2. In this trick, every card that isn't a 2 will disappear from the deck.

let twoIsSpecial = (deck) => {
    let justTwoNumbers = [];
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] == 2) {
            justTwoNumbers.push(deck[i])
        }
    }
    return justTwoNumbers;
    
};

console.log(twoIsSpecial([1 ,2 ,3 , 4, 10 , 2]));

// 6. Convert a shuffled deck into a perfectly ordered deck
// Elyse wishes to demonstrate her mastery of reordering the cards perfectly - no matter how well shuffled

let perfectlyOrdered = (deck) => deck.sort((a , b ) => a - b);

console.log(perfectlyOrdered([10, 1, 5, 3, 2, 8, 7]));

// 7. Reorder the deck
// Elyse wants to change the order of the cards in the deck. After the trick, 
// the card that is currently at the top should end up at the bottom of the deck. The second card should end up second last etc.

let reorder = (deck) => (deck = deck.reverse())

console.log(reorder([10 , 1 , 5 , 3 , 2]));

