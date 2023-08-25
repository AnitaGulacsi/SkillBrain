class UserClass {
    constructor(nem , age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(newName) {
        this.name = newName;
    }
}

const user = new UserClass("Anita" , "23");

console.log(user.getName());

user.setName("Ani");

console.log(user.getName());
