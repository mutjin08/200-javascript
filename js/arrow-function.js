let add = (a, b) => a + b;
//let add = (a, b) => {return a + b;};
console.log(add(10, 20));

let sigma = (limit) => {
    let sum = 0;
    for(i=0;i<=limit;i++){
        sum += i;
    }
    return sum;
}
console.log(sigma(100));

let alertMsg = (msg) => {alert(msg)};
alertMsg("I am free!!!");