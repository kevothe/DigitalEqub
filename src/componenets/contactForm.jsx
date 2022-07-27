import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import '.././sass/nav.scss';
export default function ContForm() {
  return (
    <div className="frm_con container-fluid">
    <form >
      <h1>Get in touch</h1>
    <div className="form-group">
   
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
   
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter comments"></textarea>
 
  </div>
  
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
</form>
</div>
    );
}

