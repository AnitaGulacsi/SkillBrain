function getName () {
    return "SkillBrain";
}

const name = getName();
console.log(name);

// diferenta dintre metoda si functie e ca functia putem apele direct iar metoda se apaelaza in felul iurmator : 

const user = {  // definirea uni obiect
    getName : () => "SkillBrain2",  // definirea unei metode
}

const userName = user.getName(); 
console.log(userName); // apaelarea metodei 

//this = se referea la obiectul direct
const user2 = {
    name2: "SkillBrain",
    getName: function() {
        return this.name2  
    },
    setName: function(name2) {
        this.name2 = name2.toUpperCase();
    },
}

user2.name = "skillbrain3";

const name2 = user.getName();
console.log(name2);

// arrow function and fanction

const f1 = () => {
    console.log(this);
};

function f2() {
    console.log(this);
}

const myObj = {
    f1,
    f2,
}

myObj.f1();
myObj.f2();

//arrow function nu recunoaste this-ul 

// atentie nu dam nume care se afla si in DOM 
// o sa ne vine informatia de acolo nu de la codul nostr 
