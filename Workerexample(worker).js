const {workerData,parentPort} = require("worker_threads")



//WorkData going to have data that is passed to worker by the parent/main thread first time we initlize the worker.
console.log(JSON.stringify(workerData));





const workCal = value=>{
//Process the data
console.log("Processing in worker");

//post the result back to parent.
//parentPort.postmessage is used to send the data back to parent/main thread.
parentPort.postMessage({name:`${value.name} amarnathan`,age:32})


//when we throw error it will be handled by parent using worker.on("error")
throw new Error("my error");

}

parentPort.on("message",workCal)



//below is both parent and worker in single file.
// const { Worker,parentPort,isMainThread,workerData } = require("worker_threads");


// if(isMainThread)
// {
//   let worker = new Worker(__filename,{workerData:{name:'srini',value:5000}});
//   worker.on("message",(message)=>{
//     console.log(message);
//   })
//   console.log("i am out of main thread...");
// }
// else
// {

//    setTimeout(()=>{
//     parentPort.postMessage(`i am ${workerData.name} !!`); 
//     console.log("i am worker !!")
//   },workerData.value);

//     //code that we need run in worker thread .
// } 