const bcrypt = require('bcryptjs');

const fun = async()=>{

    const password = "abc@123"
    const hash = await bcrypt.hash(password,8);
    console.log(`Hashed Password : ${hash}`);
    const isMatch = await bcrypt.compare(password,hash);
    console.log(isMatch);
}

fun();