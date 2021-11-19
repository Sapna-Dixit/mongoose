const express = require("express");
const app     = express();
const port    = process.env.PORT ||7000;
require("./db/conn");

app.get("/", (req, res)=>{
    res.send("Hello from the home side.")
})

app.post("/student", (req, res)=> {
    res.send("hello from the other sides.")
} );

//  app.post("/student", (req, res)=>{
//     res.send("hello from the students side")
// })
app.listen(port, ()=>{
    console.log(`Connenction is setup at ${port}`);
})