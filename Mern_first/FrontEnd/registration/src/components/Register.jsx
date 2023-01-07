import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/Register.css';
import {useNavigate } from "react-router-dom";

export default function Register() {
  const navigate=useNavigate()
  const [user, setuser] = useState({ name:"", email:"", phone:"", work:"", password:"", cpassword:""})

  const handleinput=(name)=>(e)=>{
    setuser({...user,[name]:e.target.value})
    console.log(user)
 }

 const handlesubmit=async(e)=>{
    e.preventDefault()
    const {name,email,phone,work,password,cpassword}=user
    const res=await fetch("/register", {
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin" : "*", 
"Access-Control-Allow-Credentials" : true 
      },
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    })

    const data=await res.json()
    if(!data){
      window.alert("Invalid Registeration")
    }else{
      window.alert("Registeration successfully")

      navigate("/login")
    }

 }

  return (
   <>
        <div className="container">
    <h1>SignUp</h1>
    <form method='post'>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Your name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""
            value={user.name}
            onChange={handleinput("name")}          
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Your Email</label>
          <input type="email" className="form-control" id="formGroupExampleInput" placeholder=""
             value={user.email}
             onChange={handleinput("email")} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Your Phone</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""
             value={user.phone}
             onChange={handleinput("phone")} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Your Profession</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""
             value={user.work}
             onChange={handleinput("work")} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Your Password</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""
             value={user.password}
             onChange={handleinput("password")} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Confirm your password</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""
             value={user.cpassword}
             onChange={handleinput("cpassword")} 
          />
        </div>
        <button onClick={handlesubmit} type="submit" className="btn btn-outline-success">Register</button>
    </form>
    </div>
   </>
  )
}
