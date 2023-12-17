 const express = require("express");
 const axios = require("axios");
 const bodyParser = require("body-parser");
 const app = express()
 const port = process.ENV || 5000;

//  set view engine
app.set("view engine", "ejs")

// serve the public folder as static file
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
// render the index template
app.get("/", (req, res) => {
    res.render("index", { word: null, error: null });
});
 
// handling search route
app.get("/search", async(req, res) =>{
    let word = req.body.word
    const APIurl = "https://api.dictionaryapi.dev/api/v2/entries/en/${word}"
    try{
        const response = await axios.get(APIurl);
        word = response.data

    }catch(error){
      console.log(error.message)
    };
});




 app.listen(port, () =>{
    console.log("server running on port 5000");
 })