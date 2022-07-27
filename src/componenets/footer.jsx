import React from 'react';
import '.././sass/app.scss';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container} from "react-bootstrap";
import { Icon } from '@iconify/react';
export default function FooterNew() {
  return (
    <>
    <div className=" foot_det d-flex flex-row  mx-0 justify-content-center mt-4 text-white pt-5 ">
<div className="about_footer col md-3 mt- mx-4 px-3">
<div className="img_title d-flex flex-row ">
            <img className="w-25"src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/TEST.png')}  />
    <h3 className="mt-5 pl-2">ABOUT US</h3>
        </div>
        
    <p className="mt-2">
          Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tristique senectus et netus et malesuada fames ac. Ac odio tempor orci dapibus ultrices in iaculis.
    </p>
</div>

<div className="links_footer col-1 mt-5 md-3 mx-3">

<h3 >LINKS</h3>
<nav>
   <LinkContainer to="/home">
            <Nav.Link className="link-secondary"> <Icon icon="bi:house-door-fill" color="#E3C67F"  />Home</Nav.Link>
            </LinkContainer>
            </nav>

 <nav>
   <LinkContainer to="/about">
            <Nav.Link className="link-secondary"> <Icon icon="bi:info-circle-fill" color="#E3C67F"  />About</Nav.Link>
            </LinkContainer>
            </nav>
           

            <nav>
            <LinkContainer to="/contact">
            <Nav.Link className="link-secondary"> <Icon icon="bi: carbon:phone-filled" color="#E3C67F"  />Contact</Nav.Link>
            </LinkContainer>
            </nav>
            
            <nav>
            <LinkContainer to="/services">
            <Nav.Link className="link-secondary"> <Icon icon="bi: eos-icons:service" color="#E3C67F"  />Services</Nav.Link>
            </LinkContainer>
            </nav>
           
            <nav>
            <LinkContainer to="/terms">
            <Nav.Link className="link-secondary"> <Icon icon=" icon-park-solid:notes" color="#E3C67F"  />Terms</Nav.Link>
            </LinkContainer>
            </nav>
           
            <nav>
            <LinkContainer to="/vacancy">
            <Nav.Link className="link-secondary"> <Icon icon=" bxs:briefcase" color="#E3C67F"  />Vacancy</Nav.Link>
            </LinkContainer>
            </nav>
    </div>
<div className="location_footer col mt-5 md-3 mx-3">
<h3>GET IN TOUCH</h3>
<div className="mt-2">
<a href="placeholder@digitalequb.com"><Icon icon="carbon:location-filled" color="#E3C67F" /><span>BLOOM TOWER 4TH FOOR, KAZANCHIS ADDIS ABABA, ETHIOPIA</span></a>
          
</div>
<div className="mt-3">
<a href="placeholder@digitalequb.com"><Icon icon="eva:email-fill" color="#E3C67F" /><span>placeholder@digitalequb.com</span></a>
          
</div>
<div  className="mt-3">
<a href="tel:xxxxxxxxx" ><Icon icon="carbon:phone-outgoing-filled" color="#E3C67F" /><span>(+251)91 127 3927</span></a>
    
</div>
                      
</div>
<div className="download_footer mt-5 col md-3 mx-3">
<h3 >DOWNLOAD THE APP</h3>
<div>
<a href="https://play.google.com/store/apps/details?id=com.digital.equb" class="ctn_footer" > <img src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/download-2.png')} /></a>
               
</div>
<div className="pt-3">
<a href="https://apps.apple.com/us/app/digital-equb" class="ctn_footer"><img src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/download-1.png')} /></a>
 
</div>
                 </div>
</div>
<div className="sub_footer d-flex flex-row pl-4">
<p className="col md-3">
            Copyright ©2022 All rights reserved | Digital Equb
               </p>
                <div className="col-3 md-3 d-flex flex-row justify-content-between px-1 mr-4 ">
                 <div classsName="mr-3">
                 <a href="placeholder@digitalequb.com">/<Icon icon="bi:house-door-fill" color="#E3C67F" /></a>
                  
                 </div>
                   
              <div>
              <a href="placeholder@digitalequb.com">/<Icon icon="bi:house-door-fill" color="#E3C67F" /></a>
                 
              </div>
              <div>
              <a href="placeholder@digitalequb.com">/<Icon icon="eva:email-fill" color="#E3C67F" /></a>
                  
              </div>
              <div>

              <a href="placeholder@digitalequb.com">/<Icon icon="eva:email-fill" color="#E3C67F" /></a>
                 
              </div>
              <div>

              <a href="placeholder@digitalequb.com">/<Icon icon="eva:email-fill" color="#E3C67F" /></a>
              
              </div>
              <div>
              <a href="placeholder@digitalequb.com">/<Icon icon="eva:email-fill" color="#E3C67F" /></a>
                 
              </div>
                
                  
                 
                
                 
                 
               

                    </div>
</div>
</>
    
    );
}


