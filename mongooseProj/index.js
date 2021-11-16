require("./src/app")

const express = require("express");

var app = express();
app.listen(6000, ()=>{
    console.log("Express server started at port : 6000");
})