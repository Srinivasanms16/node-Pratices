const { Worker,parentPort,isMainThread,workerData } = require("worker_threads");


if(isMainThread)
{
  let worker = new Worker(__filename,{workerData:{name:'srini',value:5000}});
  worker.on("message",(message)=>{
    console.log(message);
  })
  console.log("i am out of main thread...");
}
else
{

   setTimeout(()=>{
    parentPort.postMessage(`i am ${workerData.name} !!`); 
    console.log("i am worker !!")
  },workerData.value);

    //code that we need run in worker thread .
} 