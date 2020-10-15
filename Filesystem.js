const fs = require('fs');
fs.appendFile("myfile.txt","my name is srinivasan !!",()=>{
    console.log("successfully appended the text !!");
})