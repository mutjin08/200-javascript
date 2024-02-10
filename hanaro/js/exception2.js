function fib(n){
    if(n<0 || Math.trunc(n)!=n){
        throw new Error("음수나 정수가 아닌 값은 처리할 수 없습니다!!!");
    }
    return n<2 ? 1 : fib(n-1)+fib(n-2);
}

let num = 30;
let result;
let start = Date.now(), end;

try{
    result = fib(num);
}catch(e){
    result = 0
}finally{
    end = Date.now();
}

console.log(result || "에러 발생!!!");
console.log(`소요시간:${end-start}ms`);