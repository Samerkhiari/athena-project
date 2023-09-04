const mongoose = require("mongoose")
const schema=mongoose.Schema

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    completed: Boolean
  });
const userSchema = new schema({
    Firstname: {
      type: String,
      // required: true
    },
    Lastname: {
      type: String,
      // required: true
    },
    Email: {
      type: String,
      // required: true
    },
    Password: {
      type: String,
      // required: true
    },
    Role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'admin'
    },
    Tasks: [taskSchema]
    
  });

module.exports=User=mongoose.model("Users",userSchema)