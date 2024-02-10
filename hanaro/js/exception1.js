//let json = '{"age":30}'; //JSON이 string 형태로 전달
let json = "{age:30}"; //string이 전달

try{
    let user = JSON.parse(json);
    console.log(user.age);
}catch(e){
    console.log("JSON 데이터 오류!!!");
    console.log(e.name);
    console.log(e.message);
}