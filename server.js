require("./models/db");

const express = require("express");
    var app   = express();
    app.listen(8081, ()=>{
        console.log("Express server started at port : 8081");
    });