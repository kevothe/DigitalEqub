import React from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import ContactCard from '../componenets/contactCards';
import ContactBody from '../componenets/contactContent';
export default function Contact () {
   
        
    return(
       
      
      <div className="service-body">
        <ContactCard/>
        <ContactBody/>
       </div>
      
       
    );}