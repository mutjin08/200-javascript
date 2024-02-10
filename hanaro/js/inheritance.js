let myProto = {
    name: "김부모",
    age: 100,
    phone: "010-0000-0000",
    display: function () {
        console.log(this);
    },
    setValue: function (name = "김부모", kor = 100, eng = 100, mat = 100) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.mat = mat;
    }
}

let person = { __proto__: myProto, name: "김자식", kor: 10, eng: 10, mat: 10 };

console.log(person);
console.log(person.name);
console.log(person.phone);