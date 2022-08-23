import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import '.././sass/app.scss';
export default function ContForm() {
  return (
    <div className="frm_con container-fluid">
    <form >
      <h1>Get in touch</h1>
    <div className="form-group">
   
    <input type="text" className="form-control bg-white" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter firstname"/>
    
  </div>
  <div className="form-group mt-4">
   
    <input type="text" className="form-control bg-white" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter lastname"/>
    
  </div>
  <div className="form-group mt-4">
   
    <input type="email" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-4">
   
  <textarea className="form-control bg-white" id="exampleFormControlTextarea1" rows="3" placeholder="Enter comments"></textarea>
 
  </div>
  
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
</form>
</div>
    );
}

