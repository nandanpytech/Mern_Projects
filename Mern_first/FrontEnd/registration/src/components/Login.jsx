import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/Register.css';
export default function Login() {
  return (
   <>
      <div className="container">
    <h1>SignIN</h1>
    <form action="">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Your Email</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Your Password</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
        </div>
        <button type="submit" class="btn btn-outline-success">LogIn</button>
    </form>
    </div>
   </>
  )
}
