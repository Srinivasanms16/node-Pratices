const http = require('http');

const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/vellore.json?access_token=pk.eyJ1Ijoic3Jpbml2YXNhbm1zMTYiLCJhIjoiY2tleHY3czFhMDViYjJ0bzhydDYxZzNreiJ9.tPvohyJfy_XBEW_1rMA9xQ&limit=1';
const req = http.request(url,{method:'GET'},(res)=>{

    console.log(`status code ${res.statusCode}`);
    let data = '';

    //body  will be coming as chuck so we have listen to the data event, to get entire body.
    res.on('data',(chunk)=>{
      data = data + chunk;
    })
    
    //this end event has to be handled when the entire body is streamed 
    res.on('end',()=>{
        console.log(data);
    })

})

//error will be handled by listning to error event.
req.on('error',(error)=>{
    console.log(error);
})

//end method has to called so that request will be called.
req.end();