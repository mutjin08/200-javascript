let people = [
    {"name":"김고순", "kor":60, "eng":70, "mat":75},
    {"name":"이도치", "kor":70, "eng":60, "mat":80},
    {"name":"삼바늘", "kor":80, "eng":50, "mat":95},
    {"name":"박뾰족", "kor":90, "eng":40, "mat":65},
    {"name":"강데굴", "kor":100, "eng":30, "mat":45},
];

console.log("\n객체의 개수");
console.log(people.length);

console.log("\n인덱스로 접근 1");
for(i=0;i<people.length;i++){
    console.log(people[i]);
}

console.log("\n인덱스로 접근 2");
for(i in people){
    console.log(people[i]);
}

console.log("\n요소로 접근");
for(person of people){
    console.log(person);
}

console.log("\n객체 프로퍼티 전체 출력");
for(const [key, value] of Object.entries(people)){
    console.log(`${key} : ${value.name}, ${value.kor}, ${value.eng}, ${value.mat}`);
}