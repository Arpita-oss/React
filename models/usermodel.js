const mongoose = require("mongoose");

const usermodel = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required" ],
        minlength:[6, "Name must be atleast 6 charcater"],
        trim:true,
        unique:true
    },
    username:{
        type:String,
        required:[true, "UserName is required" ],
        minlength:[6, "UserName must be atleast 6 charcater"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        lowercase:true,
        required:[true, "Email is required" ],
        trim:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    gender:{
        type:String,
        enum:["male", "female", "others"]
    },
    password:{
        select:false, //password hta de
        type:String,
        reuqired:[true, "password is required"],
        minlength: [6, " password must be atleat 6 character"],
        maxLength:[15, "password must be atmost 15 character"],
        trim:true 
    }
})

const user = mongoose.model('user', usermodel);
module.exports=user;