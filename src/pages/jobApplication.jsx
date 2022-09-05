import React,{useState} from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import {upload} from '.././util/APIUtils';


export default function     JobApp () {
 
  const  [actformData,setformData]=useState("");

  const uploadRequest={
  

		formData:actformData
  }
 upload(uploadRequest)
      .then(response => {
          alert.success({
          
              message: 'Digital Equb',
              description: "Thank you! You're successfully registered. Please Login to continue!",
          });          
          this.props.history.push("/login");
      }).catch(error => {
          alert.error({
              message: 'Digital Equb',
              description: error.message || 'Sorry! Something went wrong. Please try again!'
          });
      });
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
    <input value ={actformData} onChange={(event)=>setformData(event.target.files)} type="file" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="upload coverletter"/>
    
      </div>
      <div className="form-group mt-4">
      <small class="form-text text-muted"> Cover letter</small>

   <input type="file" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="upload cv"/>
     </div>
 
  
  <button type="submit" onClick={() =>upload()} className="btn btn-primary mt-4">Submit</button>
</form>
        </div>
        </>
        
    );}