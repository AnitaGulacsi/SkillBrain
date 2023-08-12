// 1. Tipăriți toate numerele pare de la 0 la 10
// Încercați să rezolvați această problemă cât mai eficient posibil. Luați în considerare utilizarea buclelor care vă vor permite să tastați cele mai puține caractere / comenzi
// (se acceptă orice abordare bazată pe bucle). Deși ați putea pur și simplu să tipăriți numerele pare, fiți creativi și încercați să le generați într - un mod în care
// să funcționeze indiferent de limita setată(până la 10 sau chiar până la 10.000).

// Exemplu 1:
// Input: n = 10, unde n este numărul maxim până la care se va executa bucla
// Output: 0, 2, 4, 6, 8, 10

let printEvenNumber = (n) => {
    let evenNumbers = [];  // definesc un array gol
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0 ) {
            evenNumbers.push(i); // daca gaseste un numar par atunci face un push in array-ul gol
        }
    }
    return evenNumbers;
 };

const evenNumbers = printEvenNumber(10);
console.log("The evens numbers are : " + evenNumbers);

// 2. Calculați suma numerelor dintr-un șir de numere
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția.
// De asemenea, puteți încerca să utilizați matrice de lungimi diferite.

// Exemplu 1:
// Input: [1, -5, 20, -34, 16, 29, 36, -4]
// Output: 59

// Exemplu 2:
// Input: [3.45, -2.68, 356, -75.96, 64, 19.28]
// Output: 364.09000000000003

let sumNumbers = (numbers) => {
    let sum = 0; //declar o variabila care la inceput este 0 
    for (let i = 0; i < numbers.length; i++) {  // pana cand numbers.lenght este mai mic dacat i 
        sum += numbers[i]; //atunci sa adune numerele pima data es 0 + 1 = 1  
    }                       // pasul 2 => acuma sum este egal cu 1 => 1 + -5 = -4 ... tot asa
    return sum; //returneza suma 
};

let numbers = [1, -5, 20, -34, 16, 29, 36, -4]
sumNumbers(numbers);
console.log("The sum is : " + sumNumbers(numbers));

// 3. Creați o funcție care inversează un șir de numere
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția.
//De asemenea, puteți încerca să utilizați matrice de lungimi diferite.Un șir de numere va fi trimis ca date de intrare și, ca rezultat,
//funcția va returna un șir nou de numere cu elementele primului în ordine inversă.

// Exemplu 1:
// Input: [1, -5, 20, -34, 16, 29, 36, -4]
// Output: [-4, 36, 29, 16, -34, 20, -5, 1]


let reverseOrder = (array) => {
    let reverseArray = []; // declar un array gol in care o sa pun elementele din for 
    for (let i = array.length-1; i >= 0; i--) { // i-- scad tot timpul inca unu sa pot ajunge la elementul care este inaintea lui 
        reverseArray.push(array[i]); // aici o sa iau elementul de la final si o sa pun in array-ul gol  acesta pana atuncia fac pana nu imi mai ramane nimc in array-ul initial
    }
    return reverseArray;
}; 

let array = [1, -5, 20, -34, 16, 29, 36, -4]
reverseOrder(array)
console.log("The reverse Array is: " + reverseOrder(array));

// 4. Returnează numărul de vocale dintr-un șir de caractere (string)
// Creați o funcție care va returna un număr întreg al numărului de vocale găsite într-un șir.
//Aceasta este o modalitate excelentă de a practica determinarea caracteristicilor unui set de date.

// Exemplu 1:
// Input: “string de test”
// Output: 3


// Explicație: Parcurgeți șirul și verificați fiecare caracter individual. Dacă este vocală, atunci o variabilă își mărește valoarea
// (adaugă +1). În șirul nostru de intrare avem vocalele: i, e, e ⇒ 3.

let vowelsCheck = (sentence) => {
    let vowels = ["a", "e", "i", "o", "u"];  // am adaugat intr-un array toate vocalele
    const chars = sentence.toLowerCase().split(""); // pentru a evita case sensitiv - am adaugat toLowerCase  
    let vowelsFound = []; // toate vocalele gasite o sa fie adaugat aici 
    for (let i = 0; i < chars.length; i++) {
       if (vowels.includes(chars[i])) { //verifica daca litera sa afla in array-ul vowels sau nu 
            vowelsFound.push(chars[i]); // cand gaseste o vocala o sa aduge la vovelsFound
        }
    }
    return vowelsFound;
};

const vowelsFound = vowelsCheck("string de test");
console.log("The vowels are : { " +  vowelsFound + " }" + " =>  The length is : " + vowelsFound.length); 
