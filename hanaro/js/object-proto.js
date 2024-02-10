let myProto = {
    name:"홍길동",
    age:100,
    phone:"010-0000-0000",
    display:function(){
        console.log(this);
    },
    setValue:function(name="홍길동", kor=100, eng=100, mat=100){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.mat = mat;
    }
}

let person = {__proto__:myProto, name:"김고순", kor:100, eng:40, mat:60};

console.log("\n객체 출력하기")
person.display();

console.log("\n변경된 객체 출력하기");
person.setValue("최도치", 20, 30, 40);
person.display();

console.log("\n변경된 객체 출력하기");
person.setValue();
person.display();