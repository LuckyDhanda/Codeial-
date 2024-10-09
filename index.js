const express = require ('express');
const app =express();
const port = 3000;

const db = require('./config/mongoose');

// Step 1: Set up the view engine and layout middleware
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set("layout extractStyles", true)
app.set("layout extractScripts", true)

app.set("layout extractScripts", true)
// app.set('layout', 'layout'); 

app.set('view engine', 'ejs');
// app.set('views', './views');

app.use(express.static('assets'));


// Step 2: Define your routes
const router = require('./routes/index');
// this will send all the requests to the index file
app.use('/', router);


// Step 3: Start the server

app.listen(port, (err)=>{
    if(err){
        console.log(`Error occured while connecting to port ${port}`);
    }else{
        console.log(`Successfully connected to ${port}`);
    }
})