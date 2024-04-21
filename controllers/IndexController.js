
const User = require('../models/usermodel')

exports.home =(req,res,next)=>{
    res.status(200).json({message:"Welcome to the API"})
    res.send("Hello World!")
}

exports.register = async (req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json({sucess:true, user})
    }catch(error){
        res.status(500).json({success:false, error:error.toString()});
    }
}
exports.readall = async (req,res)=>{
    try{
        const user = await User.find()
        // const user = await User.find().select("+password");
        res.status(201).json({sucess:true, user})
    }catch(error){
        res.status(500).json({success:false, error:error.toString()});
    }
}