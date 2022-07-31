import React from 'react';
import "react-bootstrap";
import '.././sass/app.scss';

import Slides from '../componenets/carousel';
import Cards from'../componenets/cards';

import HowtoCards from '../componenets/screenshotCard';
import News from '../componenets/news'


export default function Home () {
    
   
        
         return(
        
   <div className="service-body">
    <div className="firstImp">
    <Slides/>
    
    </div>
   <News/>
      <HowtoCards />
   
    <Cards/>
   
  </div>
            
         );
    }
