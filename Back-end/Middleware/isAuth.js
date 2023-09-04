const jwt=require("jsonwebtoken")
const User=require("../models/user")
const isAuth=async(req,res,next)=>{
    try{
const token=req.headers["authorization"]
if(!token){
    return res.send({msg:"No token !"})
}
const decoded= await jwt.verify(token,"jhghsd")

const user= await User.findById(decoded.id)

if(!user){
    return res.send({msg:"no user with this token !"})
}
req.user=user
next()
    }
    catch(error){
        res.send({msg:"token not valid"})
    }
}

module.exports=isAuth