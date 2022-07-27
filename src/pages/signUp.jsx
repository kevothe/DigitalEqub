import React from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container} from "react-bootstrap";
import Navigation from '../componenets/navigation' ;
import Footer from '../componenets/footer';
export default function     SignUp () {
    return(
    <>
    <div className="jobApp w-100 flex-row d-flex justify-content-center">
    <form>
      <h3 className="text-center text-success ">Sign Up</h3>
    <div className="form-group mt-3">
   
    <input type="text" class="form-control" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter firstname"/>
    
  </div>
  <div className="form-group mt-4">
   
    <input type="text" class="form-control" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter lastname"/>
    
  </div>
  <div className="form-group mt-4">
   
    <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-4">
   
    <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="confirm email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-4">
  
    <input type="tel" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="phone"/>
     
  <div className="form-group mt-4 d-flex flex-row justify-content-space-between">
    <div className="col-5 pr-3">
  <input type="text" class="form-control" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter citizenship"/>
  </div>
  <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
  <input placeholder="Select date" type="date" id="example" class="form-control"/>


</div>
 
  </div>
  <div className="form-group mt-4">
 
  
  </div>
  
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
</div>
</form>

        </div>
        </>
        
    );}