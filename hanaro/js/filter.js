let arr = [6,5,2,4,3,1,7,8];

console.log("\n방법1 : index 접근");
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}

console.log("\n방법2 : forEach함수 + 함수 표현식");
arr.forEach(function(n){
    if(n%2==0){
        console.log(n);
    }
})

console.log("\n방법3 : forEach함수 + 화살표 함수");
arr.forEach((n)=>{
    if(n%2==0){
        console.log(n);
    }
})

console.log("\n방법4 : filter 함수 + 화살표 함수");
let result = arr.filter((x) => {if(x%2==0) return x;});
console.log(result);