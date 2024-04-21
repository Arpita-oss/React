
require("dotenv").config({path: "./.env"})
const express = require("express");
const app = express()

const indexRouter = require("./routes/indexRouter")

//db connection
require('./models/connect').mongoconnection();

console.log("hello from dev");

app.use(require("morgan")("combined"))// for getting route info 

//bodyparaser

app.use(express.json())
app.use(express.urlencoded({extended : true}))



// app.get('/sum', (req,res)=>{
//     let num1=parseInt(req.query.num1);
//     let num2=parseInt(req.query.num2);

//     function sum(x,y){return x+y};

//     res.send(`${sum(num1,num2)}`);
// })


//just above the listen route

app.use('/api/user', indexRouter);

//creating server it must be always at the bottom
app.listen(process.env.PORT, () => {
    console.log(`Server Running at ${process.env.PORT}`);
})

//wildcard route
app.all("*", (req,res)=>{
    res.status(404).json({message: "Page Not Found"});
})


