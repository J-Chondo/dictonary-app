 const express = require("express");
 const axios = require("axios");
 const bodyparser = require("body-parser");
 const app = express()
 const port = process.ENV || 5000;

//  set view engine
app.set("view engine", "ejs")

// serve the public folder as static file
app.use(express.static("public"));

// render the index template
app.get("/", (req, res) => {
    res.render("index")
})




 app.listen(port, () =>{
    console.log("server running on port 5000");
 })