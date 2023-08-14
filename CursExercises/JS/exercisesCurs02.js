// Exercițiu 1: Utilizând while loop, afișează numerele de la 1 la 10.

let numar = 1;
console.log("Primu/1 exercitiu:");
while (numar <= 10) {   // cât timp 
  console.log(numar);
  numar++;  // incrementare i = i + 1
}

console.log("Primu/2 exercitiu:");
let i = 1;
do {
  console.log(i); 
  i++;
} while (i<=10);

// Exercițiu 2: Utilizând for loop, afișează numerele de la 10 la 1 (în ordine descrescătoare).

console.log("exercitiu 2:");
for (let i = 10; i >= 1; i--) { // pentru
  console.log(i);
}

// for (start , cat timp/conditie , pas)


// Exercițiu 3: Utilizând o iterație, afișează doar numerele pare de la 1 la 20.

console.log("exercitiu 3:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercițiu 4: Scrie o funcție care primește un array de numere și returnează suma lor.

// Abordare imperativă

function sumArrayImperative(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; // sum = sum + ..
  }
  return sum;
}


// Abordare declarativa
// function sumArrayDeclarative(array) {
//     return array.reduce((acc, curr) => acc + curr, 0);
// }

const number = [34, 5, 23, 5];
console.log("Abordarea imperativa rezultat : " + sumArrayImperative(number)); 
// console.log("Abordarea declarativa rezultat : " + sumArrayDeclarative(numbers));


// Exercițiu 5: Schimbă conținutul unui array prin referință.

let fruits = ['apple', 'banana', 'orange'];

function capitalizeFruits(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
}

capitalizeFruits(fruits);
console.log("Rezultat exercitiul 5: " +  fruits); // Output: ['APPLE', 'BANANA', 'ORANGE']

// Exercițiu 6: Destructurează un array și afișează valorile sale.

let numbers = [1, 2, 3];
let [a, b, c] = numbers;  
console.log("Exercitiul 6: " + a, b); // Output: 1 2 3

// Exercițiu 7: Creează un array cu numerele de la 1 la 5 și afișează-l în consolă.

const num = [1, 2, 3, 4, 5];
console.log(num);

// Exercițiu 8: Schimbă conținutul unui element specific dintr-un array.

const fruitsArray = ['apple', 'banana', 'orange'];
fruitsArray[1] = 'grape';

for (let i = 0; i < fruitsArray.length; i++) {
    fruitsArray[i] = fruitsArray[i] + " juice";
}
console.log("Exercitiul 8 : " + fruitsArray); // Output: ['apple', 'grape', 'orange']


// Exercițiu 9: Utilizând metoda push(), adaugă un nou element într-un array.
const numbs = [1, 2, 3];
numbs.push(4);
console.log("Exerciciul 9 : " + numbs); // Output: [1, 2, 3, 4]

// Exercițiu 10: Utilizând metoda splice(), elimină un element specific dintr-un array.
const nbs = [1, 2, 3, 4, 5];
nbs.splice(2, 1); //The splice() method allows us to change the contents of an array by removing or replacing existing elements.
console.log("Exerciciul 10 : " + nbs); // Output: [1, 2, 4, 5]

// -------------------

// Exercițiu 11: Utilizând for loop, calculează suma numerelor de la 1 la 10.
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum); // Output: 55

// Exercițiu 12: Modifică un obiect prin referință.
let person = {  // person este object-ul 
  name: 'John',   // proprietati
  age: 30,   
  address: "adsada",
  sex: "M"
};

let personName = "John";
let personAge = 30;
let personInfo = [personName, personAge];

function changeAge(obj) {
  obj.age = 40;
}

changeAge(person);
console.log("Rezultatul exercitului 12 : " + typeof person.age + " " +  person.age); // typeof = ne zice tupul

//Exeplu la typeof 
let aNumber = 1;
let aSting = "a";
let boolean = true;
let aUndefined = undefined

console.log("acesta este un : " + typeof aNumber);
console.log("acesta este un : " + typeof aSting);
console.log("acesta este un : " + typeof boolean);
console.log("acesta este un : " + typeof aUndefined);

// Exercițiu 13: Utilizând operatorul spread, adună un număr variabil de argumente și afișează rezultatul.
function sumNumbers(...numbers) {   // The ...numbers syntax is known as the rest parameter, which allows the function to accept any number 
                                    // of arguments and store them in an array called numbers.
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log("Exercitiul 13/1 :  " + sumNumbers(1, 2, 3)); // Output: 6
console.log("Exercitiul 13/2 :  " + sumNumbers(4, 5, 6, 7)); // Output: 22

// Exercițiu 14: Utilizând operatorul spread, concatenează două array-uri și afișează rezultatul.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = [...array1, ...array2]; // let concatenatedArray = [array1, array2]

let concatenatedArray2 = [array1, array2];
console.log(concatenatedArray2);
console.log("Concatenarea celor doua array-uri : " + concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]


// count number of appearance for 0 and 1 in a given array of numbers.

let arrayNumber = [3, 0, 0, 0, 3, 0, 3, 3, 3, 0, 0, 0, 2, 1, 2];
let counter = 0;

for (let i=0; i< arrayNumber.length; i++) {
  //console.log(numbers[i]);
  if (arrayNumber[i] === 0 || arrayNumber[i] === 1) {
   //count it!  
    counter++;
  }
}
console.log("In arrayul nostru avem in total " + counter + " numere de 0 si 1");

// o alta metoda de rezolvare

  let counterOfNumbers = (numbersArray) => {
    let totalNumbers = []; // daclar prima data un array gol
    for (let i = 0; i < numbersArray.length; i++) {  
      if (numbersArray[i] === 0 || numbersArray[i] === 1) {  // daca gaseste un numar care este egal cu 1 sau 0 
        totalNumbers.push(numbersArray[i]); // atunci sa-l puna in totalNumbers 
      }
    }
    return totalNumbers.length;
  };

  let numbersArray = [1, 0, 5, 1 , 8 , 1 ,0 , 1];
  counterOfNumbers(numbersArray);
  console.log("In array se afla " + counterOfNumbers(numbersArray) + " de 1 si 0 "); 


// let nume = "petrovici";
// let prenume = "ionut";

// let person = {
//   nume: "petrovici",
//   prenume: "ionut",
//   //fullname: "" // "Petrovici Ionut"
// }

// let fullname = ""; // "Petrovici Ionut"

// nume = nume.split(""); 

// let firstLetter = nume[0];

// nume[0] = firstLetter.toUpperCase();
// console.log(nume);

// let Nume = "";

// for (let i=0; i<nume.length; i++) {
//   Nume = Nume + nume[i];
// }
//  console.log(Nume);
