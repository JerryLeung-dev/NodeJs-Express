const express = require('express');

const app = express();

app.use('/users', (req,res,next)=>{
    console.log("Users");
    res.send('<h1>Dummy response</h1>');
})

app.use('/', (req,res,next)=>{
    console.log("Homepage");
    res.send('<h1>Home page</h1>');
})


app.listen(3000);