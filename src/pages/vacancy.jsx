
import "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '.././sass/app.scss';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container} from "react-bootstrap";
import Navigation from '../componenets/navigation' ;
import Footer from '../componenets/footer';
import { Icon } from '@iconify/react';

export default function     Vacancy () {
   
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

        
    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  </form>
        </Modal.Body>
        <Modal.Footer>
            <div className="d-flex flex-row">
        <nav>
   <LinkContainer to="/jobApplication">
   <Nav.Link className="link-secondary text-black"><Button variant="secondary" onClick={handleClose}>
           Login
          </Button>
          </Nav.Link>
          </LinkContainer>
            </nav>
            <nav>
   <LinkContainer to="/signUp">
   <Nav.Link className="link-secondary text-black">
          <Button variant="secondary" onClick={handleClose}>
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
        <h1 className=" jobTitle text-success text-center">
        Job Listings 
    </h1>
   
      
        <div className="jobs newsBox s-flex flex-column mx-5 my-5 overflow-auto">
           
            <div className="newsBox col-12 ml-0 d-flex flex-column overflow-auto">
           
            <div className="jobListing  border-bottom-2 d-flex flex-row">
                <div className="  justify-content-center col-4 mx-2 px-5 pt-2 mt-1">
             <Button variant="primary" className ="rounded" onClick={handleShow}>
        See Details
      </Button>

                
        </div>
     <div className="newsDetails">
        <p className="text-success">
            Junior Developer
            </p>
            <p className="mt-0 pt-0">
               <ul>
                <li>
                    3 year experiance
                    </li>
                    <li>
                        CS or Software degree
                        </li>
                </ul>
                </p>
        </div>
            </div>

            <div className="jobListing d-flex flex-row">
                <div className="newsImage col-4">
                <Button variant="primary" className ="rounded" onClick={handleShow}>
        See Details
      </Button></div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="jobListing   d-flex flex-row">
                <div className="newsImage col-4">
                <Button variant="primary" className ="rounded" onClick={handleShow}>
        See Details
      </Button> </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="jobListing   d-flex flex-row">
                <div className="newsImage col-4">
                <Button variant="primary" className ="rounded" onClick={handleShow}>
        See Details
      </Button> </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="jobListing   d-flex flex-row">
                <div className="newsImage col-4">
                <Button variant="primary" className ="rounded" onClick={handleShow}>
        See Details
      </Button>  </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="jobListing   d-flex flex-row">
                <div className="newsImage col-4">
                <Button variant="primary" className ="rounded" onClick={handleShow}>
        See Details
      </Button>  </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="jobListing   d-flex flex-row">
                <div className="newsImage col-4">
                <Button variant="primary" className ="rounded" onClick={handleShow}>
        See Details
      </Button>  </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
        </div>
            </div>

            
  
            </>
    );}