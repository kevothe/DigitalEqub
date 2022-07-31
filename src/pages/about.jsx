import React from 'react';
import "react-bootstrap";
import '.././sass/app.scss';

import FtCards from '../componenets/featuresCard';

import AboutTop from '../componenets/about_top';
;
export default function About () {
    
   
        
    return(
        <>
       
        <div className='service_body'>
        <AboutTop/>
        <FtCards />

        </div>
   
       

</>
    );}