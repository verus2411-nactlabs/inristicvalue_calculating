const express = require('express');

const app = express();

const port = 3000;

//Middle ware
app.use(express.json());

// 1. API.GET: 
app.get('', (req,res) => {
    res.json({message: "Hello, this is is first line of API"});
})

app.listen( port, () =>{
    console.log(`Server is running at: http://localhost:${port}`);
})