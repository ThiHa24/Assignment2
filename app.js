const express = require('express');
const app = express()

console.log(__dirname)

app.get("/Hello",(req,res)=>{
    
    res.sendFile(__dirname + ("/index.html") )
})

app.get("/Premieredate",(req,res)=>{
    
    res.sendFile(__dirname + ("/premieredate.html") )
})

app.get("/Genres",(req,res)=>{
    
    res.sendFile(__dirname + ("/genres.html") )
})

app.get("/Name",(req,res)=>{
    
    res.sendFile(__dirname + ("/name.html") )
})


app.listen(3000,()=>{
    console.log('Server starting up at port 3000');
})
