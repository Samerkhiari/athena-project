const mongoose = require("mongoose")
const schema=mongoose.Schema

const ContactSchema=new schema({
    Firstname:{
        type:String,
        // required: true
    },
    Lastname: {
        type: String,
        // required: true
    },
    Email:{
        type:String,
        // required: true
    },
    Message: {
        type: String,
        
    }

})
module.exports=Contact=mongoose.model("Contact",ContactSchema)