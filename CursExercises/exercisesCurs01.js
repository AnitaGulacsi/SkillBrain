//Exercise 1 :
//Write a program that prompts the user to enter their name and age.
//Store the value in variables and then print a message to the console
//in the following format :
//Hello [name] ! Your are [age] years old."

let name = "Anita"; //store the value in variables
let age = "23";

console.log("Hello " + name + " ! Your are " + age + " years old. "); //print message


//Exercise 2 :
//Write a program that calculates the area of a rectangle. Prompt the user to enter the length and with of the rectangle.
//Store the values is variables and then calculate the area using the formula
//area = length + with. Finally print the result to the console.

let lengthR = 7;
let withR = 6;

let area = lengthR + withR;

console.log(area);

//with function
//use that when the function has just a return
let areaRectangle1 = (lengthRectangle , withRectangle) => (lengthRectangle + withRectangle)

let areaRectangle = (lengthRectangle, withRectangle) => {
    return lengthRectangle + withRectangle;
}

let resultAreaRectangle1 = areaRectangle1(7, 7)
let resultAreaRectangle = areaRectangle(7, 7)

console.log(resultAreaRectangle1);
console.log(resultAreaRectangle);


//Exercises 3:
//Write a function called calculator BMI that takes two parameter:
//weight ang height. Calculate the BMI using the formula BMI = weight / (height + height).
//Return the calculated BMI from the function and print it tio the console.

let BMI = (weight, height) => {
    let BMIResult = weight / (height * height);
    if (BMIResult > 30) {
        return "Your BMI is:" + BMIResult + ". You are overweight";
    } else {
         return "Your BMI is:" + BMIResult + ". You are fit!";
    }
}

let result = BMI(75, 1.60);
console.log(result);

//Exercise 4:
//Write a program that prompts the user to enter a number.
//If the number is even , print "The number is even" ,
//otherwise print "The number is odd."

let evenNumber = (number) => {
    if (number % 2 == 0) {
       return "the number is even";
    } else {
        return "the number is odd";
    }       
}

let evenResult = evenNumber(2);

console.log(evenResult);

//Exercise 5
//Write a program that generations a random number between 1 and 10 and prompts the user
//to guess the number. If the user's guess is correct, print "Congratulations! You guessed the number."
//If the guess is incorrect, print "Sorry, try again."

console.log(Math.floor(Math.random() * 10));

let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 2;

if (parseInt(guess) == randomNumber) {
    console.log("Congratulations! You guessed the number");
} else {
    console.log("Sorry, try again.");
}
