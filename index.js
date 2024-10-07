const express = require ('express');
const app =express();
const port = 8000;

const router = require('./routes/index');

// this will send all the requests to the index file
app.use('/', router);

app.listen(port, (err)=>{
    if(err){
        console.log(`Error occured while connecting to port ${port}`);
    }else{
        console.log(`Successfully connected to ${port}`);
    }
})