let add = function(a, b){
    return a + b;
}
console.log(add(4, 5));

let sigma = function(limit){
    let sum = 0;
    for(i=1; i<=limit; i++){
        sum += i;
    }
    return sum;
}
console.log(sigma(100));