let person = {"name":"김고순", "age":3, "kor":60, "eng":70, "mat":80};

console.log("\n객체 프로퍼티 전체 출력");
for(const [key, value] of Object.entries(person)){
    console.log(`${key}:${value}`);
}

console.log("\n객체 프로퍼티 일부 출력");
console.log(person.name, person.age);
console.log(person["name"], person["age"]);

console.log("\n새로운 프로퍼티 추가");
person.total = person.kor + person.eng + person.mat;
console.log(person);