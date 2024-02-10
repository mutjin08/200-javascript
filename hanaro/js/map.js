let arr = [66,55,22,44,33,11,77,88];

console.log("\nsquare 만들기");
square = arr.map((x) => {return x*x});
console.log(square);

console.log("\nenumerate 만들기");
enumerate = arr.map((x, i)=>{return [i, x]});
console.log(enumerate); 