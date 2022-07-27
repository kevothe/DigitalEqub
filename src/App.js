import React from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Router } from "react-router-dom";
//import { Router,  Route,Routes } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Services from './pages/services';
import Navigation from './componenets/navigation';
import FooterNew from './componenets/footer';

export default function App() {
  
  return (
    <>
     <Navigation />
    
    
    <FooterNew/>
    </>
   
  );
}

 