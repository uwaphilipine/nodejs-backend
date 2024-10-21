const express = require('express');
const mysql = require('mysql');
const port = 8080;

const app = express();

app.listen(port, ()=>{
    console.log('Server is running...sadasdasdas');    
})

app.get('/', (req, res)=>{
    res.json({message: "Mellow🐷"});
})