//producer : resolve, reject
const promise = new Promise((resolve, reject)=>{
    console.log("doing something...");
    setTimeout(()=>{
        //resolve("ellie");
        reject(new Error("no network"));
    }, 2000);
})

//consumer : then, catch, finally
promise
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.log(error);
    })