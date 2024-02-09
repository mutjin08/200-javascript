let person = {
    "name":"김고순",
    "age":3,
    "phone":"010-1234-5678",
    "display":function(){
        console.log(this.name, this.age, this.phone);
    },
    "setValue":function(name="홍길동", age=100, phone="010-0000-0000"){
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
};

console.log("\n객체 출력하기");
person.display();

console.log("\n변경된 객체 출력하기");
person.setValue("최도치", 6, "010-9876-4321");
person.display();

console.log("\n변경된 객체 출력하기");
person.setValue();
person.display();