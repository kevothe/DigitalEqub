import React from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
export default function     AccountRecovery () {
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
   
    <input type="text" className="form-control bg-white" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>

  <button type="submit" className="btn btn-primary mt-4">send recovery email</button>


</form>

        </div>
        </>
        
    );}