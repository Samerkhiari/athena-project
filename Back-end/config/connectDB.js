const mongoose  = require("mongoose")
const config = require("config")

const connectDB=()=>{
 mongoose.connect(config.get("MONGO_URL"))   
 .then(()=>console.log("mongosse connected"))
 .catch((err)=>console.log(err))
}

module.exports=connectDB