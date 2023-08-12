// 1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată
// Ar trebui să aibă proprietăți pentru titlu(un șir de caractere), porții(un număr) și ingrediente
//     (o șir de elemente - array).Va fi afișată pe rânduri separate(o instrucțiune console.log pentru fiecare)
//     toate informațiile obiectului după crearea acestuia.

// Exemplu 1:
// Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]
// Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }

let favoriteFood = (foodDescription) => {
    console.log(foodDescription);
    }
    
    let foodDescription = {
        titlu: "pizza",
        portii : 3,
        ingredient: [
            'sunca', 
            'kas',
            'ketchup'
        ] ,
    }
    
    favoriteFood(foodDescription);
    
    // 2. Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
    // Funcția primește 2 parametri ca date de intrare.Unul dintre parametri este obiectul,
    //     iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.
    
    // Exemplu 1:
    // Input: obiect = { a: 1, b: 2 }, proprietate = “b”
    // Output: { a: 1 }
    
    let deleteElements = (object, property) => {
        delete object[property];
            console.log(object);
    }
    
    let object = {
        a: 1,
        b: 2,
    }
    
    let property = "b";
    
    deleteElements(object, property);
    
    // 3. Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu
    //     (un șir de caractere - string), autor(un șir de caractere - string) și
    // esteCitită(un boolean care indică dacă ați citit - o).
    // Scrieți o funcție care:
    //     Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
    //     Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.
    
    // Exemplu 1:
    // Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];
    // Output:
    // “Carte 1 de Autor 1”
    // ”Ai citit deja “Carte 1” de Autor 1”
    // ”Carte 2 de Autor 2”
    // ”Trebuie sa citesti “Carte 2” de Autor 2”
    
    let booksInformation = (books) => {
      for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let { titlu, autor, esteCitita } = book;
        console.log(`${titlu} de ${autor}`);
        if (esteCitita === true) {
          console.log(`Ai citit deja "${titlu}" de ${autor}`);
        } else {
          console.log(`Trebuie să citești "${titlu}" de ${autor}`);
        }
      }
    }
    
    
    const books = [
      { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
      { titlu: "Carte 2", autor: "Autor 2", esteCitita: false },
    ];
    booksInformation(books);
    