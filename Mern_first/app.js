const dotenv=require("dotenv")
const express=require("express")
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
dotenv.config({path:'./config.env'})

const port=process.env.PORT;
require('./db/conn')

//Link import to Auth file..
app.use(require('./Router/auth'))

//middleware
const middleware=(req,res,next)=>{
    console.log("I am middleware")
    next()
}

//Routers
// app.get("",(req,res)=>{
//     res.send("My name is Nandan")
// })
app.get("/about",middleware,(req,res)=>{
    res.send("My name is About")
})
app.get("/contact",(req,res)=>{
    res.send("My name is Contact")
})
app.get("/signup",(req,res)=>{
    res.send("My name is signup")
})
app.get("/signin",(req,res)=>{
    res.send("My name is SignIN")
})


app.listen(port,()=>{
    console.log("listening")
})