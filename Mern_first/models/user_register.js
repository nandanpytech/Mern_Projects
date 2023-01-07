const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config({path:'./config.env'})
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
    
})

userschema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10)
        this.confirmpassword=await bcrypt.hash(this.password,10)
    }
 next()
})

//token
userschema.methods.generateAuthtoken=async function(){
    try {
        const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        return token
    } catch (error) {
        console.log(error)
    }
}

const Register= new mongoose.model("Registerations",userschema)
module.exports=Register