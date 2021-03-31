//async-await.
//async functions are easy way to 
//create the promise any function which is prefixed with async will retrun promise
//Inside the async function we can wait for any number of promise using await keyword.



const add = (a,b)=>{

    //setTimeout is not promise we cannot use await to wait for 2 seconds.
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(a+b)}
        ,2000)
    });
}


const dowork = async ()=>{
    try{
    const sum1 = await add(99,1);
    const sum2 = await add(sum1,50)
    const sum3 = await add(sum2,3)
    return sum3
    }
    catch(e){
        return e;
    }
}

dowork().then(result=>{
    console.log(result)
}).catch(e=>{
    console.log(e)
})