class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`hi ${this.name}!!!`);
    }
}

let user = new User("김고순");
user.sayHi();