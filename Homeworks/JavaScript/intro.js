// 1. Returnează un boolean dacă un număr este divizibil cu 10
// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.
// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.
// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

// Exemplu 1:
// Input: 100
// Output: true

// Exemplu 2:
// Input: 23
// Output: false


let divisibleTen = (number) => {
    if (number % 10 == 0) {
        return true;
    } else {
        return false;
    }
}

let result = divisibleTen(2);
console.log(result);


// 2. Scrieți o funcție numită tellFortune care:
// primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
// În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

// Exemplu 1:
// Input: numarCopii: 3, numePartener: “Emanuel”, locatieGeografica: “Italia”, locMunca: “Programator”
// Output: “Vei fi un **Programator** în **Italia**, căsătorit cu **Emanuel** și vei avea **3** copii.”


let tellFortune = (n, z, y, x) => {
    console.log("Vei fi un " + x + " in " + y + " casatorit cu " + z + " si vei avea " + n + " copii.");
}

let resultTellFortune = tellFortune("3", "Emanuel", "Italia", "Programator");

// 3. Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii
// Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

// Exemplu 1:
// Input: 1
// Output: “Luni”

// Exemplu 2:
// Input: 5
// Output: “Vineri”

let dayNumber = "5";
let day;

switch (dayNumber) {
    case "1":
        day = "Luni";
        break;
    case "2":
        day = "Marti";
        break;
    case "3":
        day = "Miercuri";
        break;
    case "4":
        day = "Joi";
        break;
    case "5":
        day = "Vineri";
        break;
    case "6":
        day = "Sambata";
        break;
    case "7":
        day = "Duminica";
        break;
}

console.log(day);