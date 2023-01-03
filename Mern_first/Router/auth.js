const express=require("express")
const router=express.Router();
const User=require("../models/user_register")
const bcrypt=require("bcryptjs")

router.get("",(req,res)=>{
    res.send("My name is Nandan Router")
})


//Sign Up backend
router.post('/register', async(req,res)=>{
   const {name,email,phone,work,password,cpassword}=req.body

   if(!name || !email || !phone || !work || !password || !cpassword){
    return res.status(402).send("Fill the form Properly.")
   }

   try {

    const UserExist=await User.findOne({email:email})
        if(UserExist){
            return res.status(422).json({error:"Email already exists"})
        }else if(password !== cpassword){
            return res.status(422).json({error:"Password are not matching."})
        }else{
            const user= new User({ name,email,phone,work,password,cpassword})
            const userRegister= await user.save()
            res.status(201).json({message:"Successfully Registered"})
        }
   } catch (error) {
    console.log(error)
   }

})



//login route
router.post("/signin",async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            return res.status(400).json({error:"Please, fill the form."})
        }

        const Userlogin=await User.findOne({email:email})
        if(Userlogin){
            //checking
            const isMatch=await bcrypt.compare(password,Userlogin.password)

            //generate token
            const token=await Userlogin.generateAuthtoken()

            if(isMatch){
                res.json({message:"Login Successfully"})
            }else{
                res.json({error:"User error"})
            }
        }else{
            return res.json({error:"Invalid Credientials"})
        }
       

    } catch (error) {
        console.log(error)
    }
})

module.exports=router