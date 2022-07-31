import React from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container} from "react-bootstrap";
import Navigation from '../componenets/navigation' ;
import Footer from '../componenets/footer';
export default function     JobDetails () {
    
   
        
    return(
        <>
        <div className="job_listings mx-0">
    <h3 className="text-center ">Job Listings</h3>  
</div>
 
<section className="wrapper_job_dit w-100 d-flex flex-column flex-lg-row mx-5 justify-content-space-between">
    <div className="job_pin col-2 mr-3">
        <h2>
            Junior Dev
        </h2>
        <p>
        deadline: september 2022    
        </p>
        <nav>
            <LinkContainer to="/jobApplication">
            <div className="form_btn pl-5">
                <p text-center>APPLY</p>
                    
                
            </div>
    </LinkContainer>
    </nav>
   
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