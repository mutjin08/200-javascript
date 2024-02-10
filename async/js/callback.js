"use strict";
function syncPrint(print){
    print();
}
function asyncPrint(print, timeout){
    setTimeout(print, timeout);
}

console.log("1");
setTimeout(()=>console.log("2"), 1000);
console.log("3");
syncPrint(()=>console.log("sync hello!!!"));
asyncPrint(()=>console.log("async hello!!!"), 2000);
