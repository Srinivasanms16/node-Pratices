
const { Worker, isMainThread, parentPort,workerData} = require('worker_threads');
const http = require('http');
const EventEmitter  = require('events');
const url = require('url');
const request = require('request');
const serverobj = require('./server.js');
const { Console } = require('console');


//Events in Node.
const eventEmitter  = new EventEmitter();
eventEmitter.on("message",(eobj)=>{console.log(`Messaege is ${eobj.message}`)});
eventEmitter.on("event2",(eobj)=>{
    console.log(`Name is ${eobj.name}`);
    console.log(`Age is ${eobj.age}`);
})
eventEmitter.emit("message",{message:'hello world !!'});
eventEmitter.emit("event2",{name:'srini',age:33})

//url module in node js
let parseurl = new url.URL("http://www.google.com/image?animal=lion")
console.log(`hostname : ${parseurl.hostname}`);
console.log(`port - ${parseurl.port}`)
console.log(`path - ${parseurl.pathname}`)
console.log(`params - ${parseurl.searchParams}`)

let jsonstring = JSON.stringify({name:"srini",age:33,nationality:"indian"});
console.log(`JSON string - ${jsonstring}`);
//http module for creating server in node.
const server = http.createServer((req,res)=>{
    debugger;
      switch (req.url) {
        case "/home":
          res.write("I am in home");
          res.end();
          break;

          case "/products":
            res.write("i am in products page");
            res.end();
            break;
      
        default:
          res.write("hello world !!");
          res.end();
          break;
      } 
})
//Server is going to start.
server.listen(7070);


/*
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */






if(isMainThread)
{
  let worker = new Worker(__filename,{name:"srini",value:10000});
  worker.on("message",(message)=>{
    console.log(message);
  })
  console.log("i am out of main thread...");
}
else
{
  console.log(workerData);

   /*setTimeout(()=>{
    parentPort.postMessage(`i am ${workerData.name}`); 
    console.log("i am worker !!")
  },workerData.value) */

    //code that we need run in worker thread .
} 


//Module wrapper function. all the node file is wrapped with this function.
//(function(exports, require, module, __filename, __dirname) { 
    // Module code actually lives in here 
//}); 