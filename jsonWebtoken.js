const jwt = require("jsonwebtoken");

const fun = ()=>{
     const token = jwt.sign({id:"1245",name:"srinivasan",email:"srini@gmail.com"},"key1")

     console.log("token: ",token);

     console.log("Decode :",jwt.decode(token));

     console.log("Verify :",jwt.verify(token,"key1"))
} 

fun();