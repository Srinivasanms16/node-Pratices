const fs = require('fs');
fs.appendFile("myfile.txt","my name is srinivasan !!",()=>{
    console.log("successfully appended the text !!");
})

fs.readFile("myfile.txt","utf8",(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)}
    );