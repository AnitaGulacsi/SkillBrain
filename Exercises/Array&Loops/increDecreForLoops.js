//  Instructions

// You are an avid bird watcher that keeps track of how many birds have visited your garden.Usually,
//     you use a tally in a notebook to count the birds but you want to better work with your data.
//     You already digitalized the bird counts per day for the past weeks that you kept in the notebook.
// Now you want to determine the total number of birds that you counted, calculate the bird
//     count for a specific week and correct a counting mistake.
//     Note:
// To practice, use a for loop solve each of the tasks below.


// 1. Determine the total number of birds that you counted so far
// Let us start analyzing the data by getting a high - level view.Find out how many birds you
//     counted in total since you started your logs.
// Implement a function totalBirdCount that accepts an array that contains the bird count per day.
//     It should return the total number of birds that you counted.

let totalBirdCount = (birdsPerDay) => {
    let total = 0 
    for (let i = 0; i < birdsPerDay.length; i++) {
        total += birdsPerDay[i];
    }
    return total;
};

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log("The total birds " + totalBirdCount(birdsPerDay));

// 2. Calculate the number of visiting birds in a specific week
// Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.
// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number.
//     It returns the total number of birds that you counted in that specific week.You can assume weeks are always tracked completely.

let birdsInWeek = (birdsPerDay , weekDetails) => {
    let sumPerWeek = [];
    let weekDays = 7 
    let sum = 0;
    let remainingDays = birdsPerDay.length % weekDays;  
    let totalWeek = birdsPerDay.length / weekDays;
    let isCompletedWeek = remainingDays === 0;
    
    for (let i = 0; i < birdsPerDay.length; i++) {  
        sum += birdsPerDay[i];
        if ((i + 1) % weekDays === 0) {
            sumPerWeek.push(sum);
            sum = 0;
        } 
    }

    if (!isCompletedWeek) {
        console.log("You have " + Math.floor(totalWeek) + " weeks and an uncompleted week witch have just " + remainingDays + " days");
    } else {
        console.log("You have " + totalWeek + " weeks");
    }

    let thisWeekDetails = sumPerWeek[weekDetails - 1];
    
    if (weekDetails == 1) {
        console.log("You chose the 1st week");
    } else if (weekDetails == 2) {
        console.log("You chose the second week");
    } else {
        console.log("You chose the " + weekDetails + "th week");
    }

    return thisWeekDetails;
};

let weekDetails = 2;
console.log(birdsInWeek(birdsPerDay , weekDetails));

// 3. Fix a counting mistake
// You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of the garden. 
//     You figured out that this bird always spent every second day in your garden.You do not know exactly where it was
//     in between those days but definitely not in your garden.Your bird watcher intuition also tells you that the bird was
//     in your garden on the first day that you tracked in your list.
// Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. 
//     It should correct the counting mistake and return the modified array.

let fixBirdCountLog = (birdsPerDay) => {
    let fixCountLog = [];

    for (let i = 0; i < birdsPerDay.length; i++) {
        let fixCount = birdsPerDay[i] + 1;
        fixCountLog.push(fixCount);
    }

    return fixCountLog;

};

console.log(fixBirdCountLog(birdsPerDay));