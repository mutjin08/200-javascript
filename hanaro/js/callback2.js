let add = function(a, b){
    return a+b;
}
let div = function(a, b){
    return a/b;
}

function myCalc(callback, x, y){
    let result = callback(x, y);
    console.log(`${x} ${y} -> ${result}`);
}

myCalc(add, 20, 30);
myCalc((x, y)=>{return x-y;}, 20, 30);
myCalc(function(x, y){return x*y}, 20, 30);
myCalc(div, 20, 30);