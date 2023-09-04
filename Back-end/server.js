const express = require("express")
const connectDB = require("./config/connectDB")
const app = express()
app.use(express.json())
const port = 5000
connectDB()
app.use("/api/auth",require("./routes/userroutes"))
app.listen(port,(err)=>{
    err?console.log(err) : console.log("server is running on port 5000");

})