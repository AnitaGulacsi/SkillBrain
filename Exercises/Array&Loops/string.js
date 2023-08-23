//  Instructions

// A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents in the past,
// the club has a very specific door policy which you'll need to master, before attempting entry.
// There are two doors at the poetry club, a front and a back door, and both are guarded.To gain entry,
//     you'll need to work out the password of the day.
// The password is always based on a poem and can be derived in a two-step process.
//     The guard will recite the poem, one line at a time and you have to respond
//         with an appropriate letter of that line.
//     The guard will now tell you all the letters you responded with at once,
//         and you need to write them down on a piece of paper in a specific format.
// The details of the process depend on which door you are trying to enter.

// 1. Get the first letter of a sentence
//  To determine the letters for the front door password, you need to respond with
//     the first letter of the line of the poem, that the guard recites to you.
// To end up with a nice password, the members of the poetry club like to use acrostic poems.
//     This means that the first letter of each sentence forms a word.Here is an example by one
//     of their favorite writers Michael Lockwood.
//
// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
//
// So when the guard recites Stands so high, you'll respond S, when the guard recites Huge hooves too, you'll respond H.
// Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.

let frontDoorResponse = (sentences) => {
    let newLines = sentences.split("/"); // split the in elements
    let letters = []; 
    for (let i = 0; i < newLines.length; i++) {
        let firstLetter = newLines[i][0];  // i get the first letter 
        letters.push(firstLetter);  // after that i push in the empty array
    }
    let password = letters.join("");  // i join the elements to get a single word 
    return password;
};


let sentences = ("Stands so high/Huge hooves too/Impatiently waits for/Reins and harness/Eager to leave");
console.log(frontDoorResponse(sentences));

// 2. Capitalize a word
// Now that you have all the correct letters, all you need to do to get the password for
// the front door is to correctly capitalize the word.
// Implement the function frontDoorPassword that accepts a string(the combined letters you found in task 1)
// and returns it correctly capitalized.

let frontDoorPassword = (password) => {
    let letters = password.toLowerCase().split(""); // first i split the word , and i make all the letters lower case
    let firstLetter = letters.shift();  // i selected the first letter

    firstLetter = firstLetter.toUpperCase(); // i make the selected letters upper case 
    letters.unshift(firstLetter); // than i put it back

    let pswd = letters.join(""); // finally i join the array to make a single word
    return pswd;
};

let password = ("Shire");
console.log(frontDoorPassword(password));

// 3. Get the last letter of a sentence
// To determine letters for the back door password, you need to respond with the last
//     letter of the line of the poem that the guard recites to you.
// The members of the poetry club are really clever.The poem mentioned before is also telestich,
//     which means that the last letter of each sentence also forms a word:
//
// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
//
// When the guard recites Stands so high, you'll respond h, when the guard recites Huge hooves too, you'll respond o.
// Note that sometimes the guard does stylist pauses(in the form of whitespace) at the end of a line.
//     You will need to ignore those pauses to derive the correct letter.
// Implement the function backDoorResponse that takes a line of the poem as an argument
//     and returns the last letter of that line that is not a whitespace character.

let backDoorResponse = (poemLines) => {
    let words = [];
    let lastLetter = [];
    let newLine = poemLines.split("/"); // split in elements
    for (let i = 0; i < newLine.length; i++) {
        words.push(newLine[i].trim()); // i remove the white space 
        let lastCharacter = words[i][words[i].length - 1];
        lastLetter.push(lastCharacter);
    }


    //if you want the fist letter to be Upper case use this code 

    // let firstLetter = lastLetter.shift();
    // firstLetter = firstLetter.toUpperCase();
    // lastLetter.unshift(firstLetter);

    lastLetter = lastLetter.join("");

    return lastLetter;
};

let poemLines = ("Stands so high          /Huge hooves too/           Impatiently waits for          /Reins and harness        /Eager to leave");
console.log(backDoorResponse(poemLines));

// 4. Be polite
// To enter the poetry club via the back door, you need to be extra polite.So to derive the password,
//     this time you need to correctly capitalize the word and add ', please' at the end.
// Implement the function backDoorPassword that accepts a string(the combined letters you found in task 3)
//     and returns the polite version of the capitalized password.

let bePolite = (polite) => {
    let politeWord = (" , please")
    let concatenatedWords = [...polite, ...politeWord]; 
    let sentences = concatenatedWords.join("");
    return sentences;
    
};

let polite = ("horse");
console.log(bePolite(polite));
