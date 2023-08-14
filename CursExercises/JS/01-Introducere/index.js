//INTRODUCERE

// comment pentru o linie de cod
/*commentarea mai 
multor linii de
cod */

//Afisarea pe ecran
// console.log("My first log message using JS")
// console.log("this" + "is another" + "message")

// //Variabile = let si costante = const
// const name = "Anita"; //string intoteaduana este trecuta in ghilimele
// let dateOfBirth = 2000; // numar

// //reasignare
// name = "Raducu";

// //reasignarea se face doar pentru string
// //daca lasam in modul acesta o sa primim eroare
// // anNastere = 2001;

// //variabilla [asignare] valoare
// console.log(nume + "este nascut in" + anNastere);

// //operatii de matematica
// let x = 5; //declararea unor variabile
// let y = 3;
// let sum = x + y; //declareare unor variabile si primira unui sume
// let difference = x - y;
// let product = x * y;
// let quotient = x / y;

// console.log(sum, difference, product, quotient);

// //Sting operations
// let firstName = "Eva";
// let lastName = "Anita";
// let date = 1999;
// let totalName = firstName + " " + lastName;

// let a = firstName + date;

// console.log(totalName);

//FUNCTII

//Defining and calling a function :

// function greet() {
//     console.log("Hello");
// }

// let greatings = () => {
//     console.log("Hey there!");
// }

// greet();
// greatings();

// let add = (x, y) => {
//     return x + y;
// }
// let result = add(1 , 4)

// let operations = (x, y, z) => {
//     return ((x + y) / z) + 2;
// }
//let result = operations(1 ,3 , 6);


// let modulo = (x, y) => {
//     return x % y; // modulo operator
// }
//let result = modulo (10 , 4)
// console.log(result);

//conditii

//Exemple of if statement
// let age = 18;

// if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not elidible to vot yet.");
// }

// let grade = 85;

// if (grade >= 90) {
//     console.log("You got an A!");
// } else if(grade >= 80) {
//     console.log("You got a B!");
// } else if (grade >= 70) {
//     console.log("You got a C!");
// } else if (grade >= 60) {
//     console.log("You got a D!")
// } else {
//     console.log("You got an E!");
// }

// let day = "Monday";
// let schedule;

// switch (day) {
//     case "Monday":
//         schedule = "Math class";
//         break;
//     case "Tuesday":
//         schedule = "Science class"
//         break;
//     case "Wednesday":
//         schedule = "History class";
//         break;
//     case "Thursday":
//         schedule = "JS CLASS";
//         break;
//     case "Friday":
//         schedule = "Art class";
//         break;
//     default:
//         schedule = "No class";
//         break;
// }

// console.log("Your schedule for today is:" + schedule);

// let a = 40;
// let b = "40";

//  ==  verifica doar continutul daca este egal
//  === vefifica si tipul

// console.log(a === b);

//Exemple of boolean variables and logical operators
// && (AND)
// ! (NOT)
// || (OR)

// let isRainig = true // 1
// let isSunny = false // 0

// if (isRainig && !isSunny) {
//     console.log("It's raining but not sunny.");
// } else if (!isRaining && isSunny) {
//     console.log("It's sunny but not raining.");
// } else if (isRaining && isSunny) {
//     console.log("It's both raining and sunny. Check your weather app!");
// } else if (isRainig || isSunny) {
//     console.log("I don't know if it's raining or if it's sunny, but for sure it's one of them");
// } else {
//        console.log("It's neither raining not sunny")
// }

// if (isRainig) {
//     console.log("It's Raining"); 
// }

// if (!isSunny) {
//     console.log("It's not Sunny");
// }

