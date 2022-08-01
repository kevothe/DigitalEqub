
import "react-bootstrap";

import Button from 'react-bootstrap/Button';

import '.././sass/app.scss';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav} from "react-bootstrap";


export default function     Vacancy () {
   
   
        
    return(
        <>
        
        <h1 className=" jobTitle text-success text-center">
        Job Listings 
    </h1>
   
      
        <div className="jobs newsBox s-flex flex-column mx-5 my-5 overflow-auto">
           
            <div className="newsBox col-12 ml-0 d-flex flex-column overflow-auto">
           
            <div className="jobListing  border-bottom-2 d-flex flex-row">

                <div className="  justify-content-center col-4 mx-2 px-5 pt-2 mt-1">
                <nav>
            <LinkContainer to="/jobDet">
            <Nav.Link className="link-secondary text-white">
             <Button variant="primary" className ="rounded" >
        See Details
      </Button>
      </Nav.Link>
      </LinkContainer>
      </nav>

                
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
            <div className="jobListing  border-bottom-2 d-flex flex-row">

<div className="  justify-content-center col-4 mx-2 px-5 pt-2 mt-1">
<nav>
<LinkContainer to="/jobDet">
<Nav.Link className="link-secondary text-white">
<Button variant="primary" className ="rounded" >
See Details
</Button>
</Nav.Link>
</LinkContainer>
</nav>


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
<div className="jobListing  border-bottom-2 d-flex flex-row">

                <div className="  justify-content-center col-4 mx-2 px-5 pt-2 mt-1">
                <nav>
            <LinkContainer to="/jobDet">
            <Nav.Link className="link-secondary text-white">
             <Button variant="primary" className ="rounded" >
        See Details
      </Button>
      </Nav.Link>
      </LinkContainer>
      </nav>

                
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
            <div className="jobListing  border-bottom-2 d-flex flex-row">

                <div className="  justify-content-center col-4 mx-2 px-5 pt-2 mt-1">
                <nav>
            <LinkContainer to="/jobDet">
            <Nav.Link className="link-secondary text-white">
             <Button variant="primary" className ="rounded" >
        See Details
      </Button>
      </Nav.Link>
      </LinkContainer>
      </nav>

                
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
            <div className="jobListing  border-bottom-2 d-flex flex-row">

                <div className="  justify-content-center col-4 mx-2 px-5 pt-2 mt-1">
                <nav>
            <LinkContainer to="/jobDet">
            <Nav.Link className="link-secondary text-white">
             <Button variant="primary" className ="rounded" >
        See Details
      </Button>
      </Nav.Link>
      </LinkContainer>
      </nav>

                
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
            
        </div>
            </div>

            
  
            </>
    );}