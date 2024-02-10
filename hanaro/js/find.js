let arr = [6,5,2,4,3,1,7,8];
let result;

console.log("\nfilter 함수 + 화살표 함수");
result = arr.filter((x)=>{if(x%2==0) return x;});
console.log(result);

console.log("\nfind 함수 + 화살표 함수");
result = arr.find((x)=>{if(x%2==0) return x;});
console.log(result);