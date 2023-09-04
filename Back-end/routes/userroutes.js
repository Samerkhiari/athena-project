const express=require("express")
const router = express.Router()
const bcrypt=require("bcrypt")
var jwt = require('jsonwebtoken');
const User=require("../models/user")
const isAuth=require("../Middleware/isAuth")

//Sign in 
router.post("/signin",async(req,res)=>{
  const{Firstname,Email,LastName,Password}=req.body
  let user=await User.findOne({Email})
  if(user){
     return res.send({msg:"user already exists !"})
  }
user=new User({
  Firstname,Email,Password,LastName
})
const salt=10
let hashedPassword= await bcrypt.hash(Password,salt)
user.Password=hashedPassword
await user.save()




res.send({msg:"user added with success !"})

}) 

//login
router.post("/login",async(req,res)=>{
  const{Email,Password}=req.body
  try{
  let user=await User.findOne({Email})
  if(!user){
   return    res.send({msg:"user not found !"})
  }
  let isMatch= await bcrypt.compare(Password,user.Password)

if(!isMatch){
 return  res.send({msg:"Bad credentials !  Password"})
}
const payload={
  id:user._id
}
var token = jwt.sign(payload, 'jhghsd',{ expiresIn: '1h' });


res.send({msg:"user logged with success !",user,token})

  }
  catch(error){
      res.send(error)
  }

})

//get auth user
router.get("/user",isAuth,(req,res)=>{
  res.send({user:req.user})
})

//UserCount
router.get('/userCount', async (req, res) => {
  try {
      const userCount = await User.countDocuments();
      res.json({ count: userCount });
  } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
  }
});

//add tasks 
router.put('/addTask/:id',async (req, res) => {
  try {
    const {id} = req.params
    const { title, description, dueDate, completed } = req.body; 
    const upUser = await User.findById(id)
   
    await User.findByIdAndUpdate(id, { Tasks: [...upUser.Tasks,req.body]})
    res.status(201).json("TaskAdded");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding the task.' });
  }
});

// DELETE a task by ID
router.delete('/deleteTask/:id/:taskId', async (req, res) => {
  try {
    const { id, taskId } = req.params;
    
    // Find the user by ID
    const user = await User.findById(id);
    console.log('task to delete : ',taskId )

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Filter out the task to be deleted by taskId
    const updatedTasks = user.Tasks.filter(task => task._id != taskId);

    // Update the user's Tasks array without the deleted task
    await User.findByIdAndUpdate(id, { Tasks: updatedTasks });

    res.status(200).json("TaskDeleted");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the task.' });
  }
});

//Edit task
router.put('/editTask/:id/:taskId', async (req, res) => {
  try {
    const { id, taskId } = req.params;
    const { title, description, dueDate, completed } = req.body;

    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Find the task to edit by taskId
    const taskToEdit = user.Tasks.id(taskId);

    if (!taskToEdit) {
      return res.status(404).json({ message: 'Task not found.' });
    }

    // Debugging: Log the received data
    console.log('Request Body:', req.body);
    console.log('Task ID to Edit:', taskId);
    console.log('Task Before Edit:', taskToEdit);

    // Update the task properties
    if (title !== undefined) {
      taskToEdit.title = title;
    }

    if (description !== undefined) {
      taskToEdit.description = description;
    }

    if (dueDate !== undefined) {
      taskToEdit.dueDate = dueDate;
    }

    if (completed !== undefined) {
      taskToEdit.completed = completed;
    }

    // Debugging: Log the updated task
    console.log('Task After Edit:', taskToEdit);

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'Task updated successfully', updatedTask: taskToEdit });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while editing the task.' });
  }
});








module.exports=router