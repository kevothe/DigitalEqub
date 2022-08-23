import React, { useState } from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import {LinkContainer} from 'react-router-bootstrap';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Nav} from "react-bootstrap";
import { login } from '.././util/APIUtils';
import { ACCESS_TOKEN } from '.././constants';
export default function     JobDetails () {
    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [actUsernameOrEmail,setUsernameOrEmail]=useState("");
 
  const [actPassword,setPassword]=useState("");
  const loginRequest={
    usernameOrEmail:actUsernameOrEmail,
    password:actPassword};
 console.log(loginRequest.password)
  login(loginRequest)
                    .then(response => {
                        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                        console.log(ACCESS_TOKEN)
                        this.props.onLogin();
                    }).catch(error => {
                        if(error.status === 401) {
                              console.log('not found')               
                        } else {
                                                                    
                        }
                    });
    return(
        <>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input id="exampleInputEmail1" name="usernameOrEmail"  type="email" className="bg-white form-control" value ={actUsernameOrEmail} onChange={(event)=>setUsernameOrEmail(event.target.value)} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input  value ={actPassword} onChange={(event)=>setPassword(event.target.value)} name="password"  type="password" className="bg-white form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" className=" bg-white form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  </form>
        </Modal.Body>
        <Modal.Footer>
            <div className="d-flex flex-row">
     <Button onClick={() => login()} variant="secondary" htmlType="submit" rounded >
           Login
          </Button>
           <nav>
   <LinkContainer to="/signUp">
   <Nav.Link className="link-secondary text-black">
          <Button variant="secondary" rounded >
           signup
          </Button>
          </Nav.Link>
          </LinkContainer>
            </nav>
          <nav>
   <LinkContainer to="/accountRecovery">
            <Nav.Link className="link-secondary text-black"> Forgot Password</Nav.Link>
            </LinkContainer>
            </nav>
</div>
  </Modal.Footer>
      </Modal>

        <div className="job_listings mx-0">
    <h3 className="text-center ">Job Listings</h3>  
</div>
 
<section className="wrapper_job_dit w-100 d-flex flex-column flex-lg-row mx-5 justify-content-space-between">
    <div className="job_pin col-2 mr-lg-3">
        <h2>
            Junior Dev
        </h2>
        <p>
        deadline: september 2022    
        </p>
        
            <div className="form_btn " py-0 >
            <Button variant="primary" className ="rounded" onClick={handleShow}>
          APPLY
      </Button>     
                
            </div>
    
   
    </div>
    <div className="job_dit col-8 mx-auto">
<h3>
    Job Discription
    </h3>
    <p>
        Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tristique senectus et netus et malesuada fames ac. Ac odio tempor orci dapibus ultrices in iaculis.
 
    </p>
    <h3>
        Requirements
        </h3>
        <ul>
            <li>Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.</li>
            <li>Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.</li>
            <li>Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.</li>
            <li>Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.</li>
        </ul>
    </div>

    </section>

</>
           );}

           