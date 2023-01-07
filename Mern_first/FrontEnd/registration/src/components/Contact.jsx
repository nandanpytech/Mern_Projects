import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  '../assets/css/Contact.css';

export default function Contact() {
  return (
   <>
    <div className="Contain">
    <h1>ContactUs</h1>
    <form action="">
      <div className="box_model">
      <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Your Name</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Your Email</label>
          <input type="email" class="form-control" id="formGroupExampleInput" placeholder=""/>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Your Password</label>
          <input type="" class="form-control" id="formGroupExampleInput" placeholder=""/>
        </div>
      </div>
      <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div> 
       
        <button type="submit" class="btn btn-outline-success">Submit</button>
    </form>
    </div>
   </>
  )
}
