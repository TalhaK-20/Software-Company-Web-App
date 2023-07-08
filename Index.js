
const express = require("express")
const app = express()
const path = require("path")

const port = 5000


app.use(express.static("public"))

app.set("view engine", "ejs")


app.get("/",(req,res)=>{
    res.render("Index.ejs")
})


app.get("/*",(req,res)=>{
    console.log("Wrong Url Brother")
})
 

app.listen(port,() => {
    console.log(`Server listening at port ${port}`);
})

