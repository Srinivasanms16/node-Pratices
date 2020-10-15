
const http = require("http");

function myserver()
{
    console.log(module);
    
}
exports.myserver = myserver;

class newServer {
    
    constructor(){}

    createServer()
    {
        let abc = http.createServer((req,res)=>{
            res.write("hello world !!");
            res.end();
        });
        abc.listen(5041);
        
    }

}
exports.newServer = newServer;

//one way 
//module.exports = {myserver,newServer}