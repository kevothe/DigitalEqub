
import "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '.././sass/app.scss';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container} from "react-bootstrap";
import Navigation from '../componenets/navigation' ;
import Footer from '../componenets/footer';


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
          <Button variant="secondary" onClick={handleClose}>
           Login
          </Button>
          <Button variant="secondary" onClick={handleClose}>
           signup
          </Button>
          <label >Forgot password</label>
    
          
        </Modal.Footer>
      </Modal>
        <h1 className=" jobTitle text-success text-center">
        Job Listings 
    </h1>
   
      
        <div className="jobs newsBox s-flex flex-column mx-5 my-5 overflow-auto">
           
            <div className="newsBox col-12 ml-0 d-flex flex-column overflow-auto">
           
            <div className="jobListing  border-bottom-2 d-flex flex-row">
                <div className=" col-4">
             <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

                
        </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                f jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>

            <div className="jobListing d-flex flex-row">
                <div className="newsImage col-4">
     <img className="w-25 image-fluid" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/logoPic.png')} />
     </div>
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
     <img className="w-25 image-fluid" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/logoPic.png')} />
     </div>
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
     <img className="w-25 image-fluid" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/logoPic.png')} />
     </div>
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
     <img className="w-25 image-fluid" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/logoPic.png')} />
     </div>
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
     <img className="w-25 image-fluid" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/logoPic.png')} />
     </div>
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
     <img className="w-25 image-fluid" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/logoPic.png')} />
     </div>
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