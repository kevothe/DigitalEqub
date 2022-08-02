import React from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container} from "react-bootstrap";
import Navigation from '../componenets/navigation' ;
import Footer from '../componenets/footer';
import {UseForm} from 'react-hook-form';
export default function     JobApp () {
    return(
    <>
    <div className="jobApp w-100 flex-row d-flex justify-content-center">
    <form>
      <h3 className="text-center text-success ">Please Fill the following details</h3>
    <div className="form-group mt-3">
   
    <input type="text" className="form-control bg-white" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter firstname"/>
    
  </div>
  <div className="form-group mt-4">
   
    <input type="text" className="form-control bg-white " id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter lastname"/>
    
  </div>
  <div className="form-group mt-4">
   
    <input type="email" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-4">
   
    <input type="email" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="confirm email"/>
     </div>
  <div className="form-group mt-4">
  
    <input type="tel" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="phone"/>
      </div>
  <div className="form-group mt-4">
  <small class="form-text text-muted" id="emailHelp"> Resume</small>
    <input type="file" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="upload coverletter"/>
      </div>
      <div className="form-group mt-4">
      <small class="form-text text-muted"> Cover letter</small>

   <input type="file" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="upload cv"/>
     </div>
  <div className="form-group mt-4 d-flex flex-row justify-content-space-between">
    <div className="col-5 pr-3">
  <input type="text" className="form-control bg-white" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter citizenship"/>
  </div>
  <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
  <input placeholder="Select date" type="date" id="example" class="form-control"/>


</div>
 
  </div>
  <div className="form-group mt-4">
 
  
  </div>
  
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
</form>
        </div>
        </>
        
    );}