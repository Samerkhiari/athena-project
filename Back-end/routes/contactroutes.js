const express=require("express")
const router = express.Router()
const Contact=require("../models/contact")


//Send Message
router.post('/api/contact', async (req, res) => {
    try {
      const { FirstName, LastName, Email, Message } = req.body;
      const newContact = new Contact({
        FirstName,
        LastName,
        Email,
        Message,
      });
      await newContact.save();
      res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
}) 
module.exports=router