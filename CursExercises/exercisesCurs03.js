

//objecte

let user = {
    email: 'user@game.com', // key: value
    name: 'Raducu',
    password: '123456ds',
    age: 34
}

console.log(user); //  afiseaza tot objectul

// afiseaza doar un element (cel dat) din object
console.log(user.name); 
console.log(user["password"]);

//adaugarea unuor proprietati pentru object 
user.city = "Cluj";
console.log(user);

//modificarea valorii
// user[city] = "Targu-Mures";
// console.log(user.city);

//stergera proprietatii
delete user.city
console.log(user);

let obj1 = {};
// let obj2 = obj1;

//destucturarea objectului 
let obj2 = { ...obj1 };

// o sa fie la fel dearece in spate de afla acceasi obj
obj1.name = "object";  
obj2.age = 32;

console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2); // verifica daca este stocat in acelasi loc

// console.log(obj1.name === obj2.name); // verifica proprietates

const changeObj = (obj) => {
    obj.key = "value";
};

const obj = {};
console.log(obj);

changeObj(obj);
console.log(obj + "\n");

// parcurgera objectelor

// let course = {
//     name: 'Js React',
//     slug : 'js-react',
// }

// for (let prop in course) {
//     console.log(`course.${prop} = ${course[prop]}`); // sting literal
//     console.log(course.name);
// }

// // exercises and explication

// // sa implementam a funtie findKey() , care returneaza o lista de chei , a caror valoare este
// // egale cu valora indicata.

// let lessonMembers = {
//     syntax: 3,
//     using: 2,
//     foreach: 10,
//     operation: 10,
//     destructuring: 2,
//     array: 2,
// }

// let findKeys = (obj, exertedValue) => {
//     let result = [];

//     let entries = Object.entries(obj);

//     for (let [key, value] of entries) {
//         if (value == exertedValue) {
//             result.push(key);
//         }
//     }

//     return result;
// };

// console.log(findKeys(lessonMembers), 2);


//objecte imbricate 
let users = {
    name: 'Vasile',
    married: true,
    age: 25,
    friends: ['Mircea', 'Mihai'],
    children: [
        {
        name: 'Mila',
        age: 1,
        },
        {
            name: 'Petru',
            age: '10',
        }
    ],
    company: {
        name: 'SkillBrain',
        
    }           
}

console.log(users.friends[1]);
