import React,{useState} from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import { forgotPassword} from '.././util/APIUtils';


  
export default function     AccountRecovery () {
  const [actEmail,setEmail]=useState("");
  const forgotPasswordRequest = {
    email: actEmail
  };
  forgotPassword(forgotPasswordRequest)
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
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    <div className="jobApp w-100 flex-row d-flex justify-content-center">
    <form>
      <h3 className="text-center text-success ">Find account</h3>
    <div className="form-group mt-3">
   
    <input value ={actEmail} onChange={(event)=>setEmail(event.target.value)} type="email" className="form-control bg-white" id="InputEmail"  placeholder="Enter email"/>
    
  </div>

  <button type="submit" className="btn btn-primary mt-4" onClick={() => forgotPassword()}>send recovery email</button>


</form>

        </div>
        </>
        
    );}