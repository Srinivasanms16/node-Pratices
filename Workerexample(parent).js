//main or parent .
const {Worker} = require("worker_threads")
const path = require("path");


const config = {config1:"c1",config2:"c2"};
workerPath = path.join(__dirname,"Workerexample(worker).js")
debugger;
//it just specify the path of worker and main data that need to send during the initlization.
const worker = new Worker(workerPath,{workerData:config})
console.log("i am in parent");
worker.postMessage({name:"srinivasan",age:"32"})

//here worker listen for the output of worker theard.
worker.on("message",(value)=>{
    console.log("Back to parent")
    console.log(JSON.stringify(value));
})

worker.on("error",(err)=>{
    console.log("Back to parent")
    console.log(err.message);
})