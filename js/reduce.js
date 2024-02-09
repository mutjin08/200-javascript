let arr = [6,5,2,4,3,1,7,8];
let result;

result = arr.reduce((sum, x) => {
    console.log(sum, x);
    return sum+x;
});
console.log(result);