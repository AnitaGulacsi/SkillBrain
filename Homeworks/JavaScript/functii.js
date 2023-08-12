// 1. Scrieți o funcție care returnează pătratul unui număr
// Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).

// Exemplu 1:
// Input: num = 6
// Output: 36

// Exemplu 2:
// Input: num = 0
// Output: 0

// Exemplu 3:
// Input: num = -12
// Output: 144

let findSquare = (number) => number * number ; // functiile sa fie cu const

console.log(findSquare(4));

// 2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . 
// Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
// Funcția getRandom(start, end) returnează un număr întreg aleator generat în intervalul definit de variabilele de început și sfârșit furnizate.
    
// Exemplu 1:
// Input: start = 3, end = 5
// Output: < un num**ă**r mai ≥ 3 și < 5>
    
// Hint: Pentru a rezolva problema, va fi folosită funcția built in a JavaScript-ului: Math.random().
// Notă: Exemplele date sunt de natură abstractă pentru a nu crea confuzii. Numerele aleatoare generate nu pot fi estimate în avans, 
// fiecare apel de funcție generând un nou număr aleator. Singura regulă impusă este respectarea intervalului dat de parametrii de început 
// și de sfârșit.

const getRandom = (start, end) => Math.floor(Math.random() * (end - start) + start);

console.log(getRandom(3, 5));

// 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

// Exemplu 1:
// Input: sir = “Îmi place programarea” litera = “a”
// Output: 4

// Exemplu 2:
// Input: sir = “Vreau să lucrez în IT”, litera = “r”
// Output: 2

// Notă: Nu se ține cont de scrierea cu majuscule sau minuscule. 
// Litera A și litera a trebuie numărate la calcularea numărului de apariții pentru A sau pentru a.

const letterCount = (sentencises , letter) => {
    let arrayLetter = [];
    let chars = sentencises.toLowerCase().split("");
    for (let i = 0 ; i < chars.length ; i++) {
       if (chars[i] === letter){
            arrayLetter.push(chars);
        }
    }
    return arrayLetter.length;
}

console.log(letterCount("Îmi place progrAmarea" , "a"));

// 4. Scrieți o funcție pentru a adăuga numere nelimitate
// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. 
// Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

// Exemplu 1:
// Input: addNumber(1, 2, 3)
// Output: 6

// Exemplu 2:
// Input: addNumber(1, 2, 3, 4, 5)
// Output: 15

// Hint: Pentru a rezolva problema, vom folosi operatorul spread / rest (...) pentru a defini argumentele funcției:
// const addNumber = (…argumente) ⇒ {}

const addNumber = (...args) => {
    let sum = 0;
    for (let num of args) {
      sum += num;
    }
    return sum;
};

console.log(addNumber(1, 2, 3, 4, 5));