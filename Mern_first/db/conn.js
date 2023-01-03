const mongoose= require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/Mern_first").then(()=> console.log("connected"))