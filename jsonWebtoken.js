const jwt = require("jsonwebtoken");

const fun = ()=>{
     const Secretkey = "12hyr56";
     
     const token = jwt.sign({id:"1245",name:"srinivasan",email:"srini@gmail.com"},Secretkey)

     console.log("token: ",token);

     console.log("Decode :",jwt.decode(token));

     console.log("Verify :",jwt.verify(token,Secretkey))
} 

fun();