const add = (x,y,print)=>{
    setTimeout(()=>{
        const result = x + y;
        print(result);
    },2000)

}

add(1,3,(result)=>{
    console.log(result)
});