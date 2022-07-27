import React from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import Navigation from '../componenets/navigation' ;
import FtCards from '../componenets/featuresCard';

import Footer from '../componenets/footer';
import Card from '../componenets/cards'
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