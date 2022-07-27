import React from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import Navigation from '../componenets/navigation' ;
import Footer from '../componenets/footer';
import Slides from '../componenets/carousel';
import Cards from'../componenets/cards';
import FtBox from '../componenets/featuresBox';
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
