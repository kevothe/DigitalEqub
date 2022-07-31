import React from 'react';
import '.././sass/app.scss';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container} from "react-bootstrap";
import { Icon } from '@iconify/react';
export default function FooterNew() {
  return (
    <>
    <div className=" foot_det d-flex flex-column flex-lg-row   mx-0 justify-content-center mt-4 text-white py-5 ">
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
            <Nav.Link className="link-secondary text-white"> <Icon icon="bi:house-door-fill" color="#E3C67F"  />Home</Nav.Link>
            </LinkContainer>
            </nav>

 <nav>
   <LinkContainer to="/about">
            <Nav.Link className="link-secondary text-white"> <Icon icon="bi:info-circle-fill" color="#E3C67F"  />About</Nav.Link>
            </LinkContainer>
            </nav>
           

            <nav>
            <LinkContainer to="/contact">
            <Nav.Link className="link-secondary text-white"> <Icon icon="carbon:phone-filled" color="#E3C67F"  />Contact</Nav.Link>
            </LinkContainer>
            </nav>
            
            <nav>
            <LinkContainer to="/services">
            <Nav.Link className="link-secondary text-white"> <Icon icon="eos-icons:service" color="#E3C67F"  />Services</Nav.Link>
            </LinkContainer>
            </nav>
           
            <nav>
            <LinkContainer to="/terms">
            <Nav.Link className="link-secondary text-white"> <Icon icon=" eos-icons:service" color="#E3C67F"  />Terms</Nav.Link>
            </LinkContainer>
            </nav>
           
            <nav>
            <LinkContainer to="/vacancy">
            <Nav.Link className="link-secondary text-white"> <Icon icon=" bxs:briefcase" color="#E3C67F"  />Vacancy</Nav.Link>
            </LinkContainer>
            </nav>
    </div>
<div className="location_footer col mt-5 md-3 mx-3">
<h3>GET IN TOUCH</h3>
<div className="mt-2">
<Icon icon="carbon:location-filled" color="#E3C67F" /><span>BLOOM TOWER 4TH FOOR, KAZANCHIS ADDIS ABABA, ETHIOPIA</span>
          
</div>
<div className="mt-3">
<Icon icon="eva:email-fill" color="#E3C67F" /><span>placeholder@digitalequb.com</span>
          
</div>
<div  className="mt-3">
<Icon icon="carbon:phone-outgoing-filled" color="#E3C67F" /><span>(+251)91 127 3927</span>
    
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
<div className="sub_footer d-flex flex-row px-4">
<p className="col md-3 mt-2">
            Copyright ©2022 All rights reserved | Digital Equb
               </p>
                <div className="col-3 md-3 d-flex flex-row  px-3 mr-4 justify-content-between pt-2 ">
                 <div classsName="mr-3">
                 <Icon icon="akar-icons:facebook-fill" color="#e3c67f" width="20" />
                  
                 </div>
                   
              <div>
                <a href="/">
             <Icon icon="entypo-social:instagram" color="#e3c67f" width="20"/>
                 </a>
              </div>
              <div>
              <a href="/">
             <Icon icon="cib:telegram" color="#e3c67f" width="20"/>
                 </a> 
              </div>
              <div>
              <a href="/">
              <Icon icon="eva:email-fill" color="#E3C67F" width="20" />
                 </a>
              </div>
              <div>
              <a href="/">
            <Icon  icon="ant-design:twitter-circle-filled" color="#e3c67f" width="20"/>
              </a>
              </div>
              <div>
              <a href="/">
              <Icon icon="akar-icons:github-fill" color="#e3c67f" width="20"/>
                 </a>
              </div>
                
                  
                 
                
                 
                 
               

                    </div>
</div>
</>
    
    );
}


