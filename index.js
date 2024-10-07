const express = require ('express');
const app =express();
const port = 8000;

app.listen(port, (err)=>{
    if(err){
        console.log(`Error occured while connecting to port ${port}`);
    }else{
        console.log(`Successfully connected to ${port}`);
    }
})