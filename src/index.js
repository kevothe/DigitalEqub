import  React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './sass/app.scss';

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Services from './pages/services';
import Navigation from './componenets/navigation';
import FooterNew from './componenets/footer';
import Terms from './pages/terms';
import Vacancy from './pages/vacancy';
import JobDetails from './pages/jobDetails';
import JobApp from './pages/jobApplication';
import SignUp from './pages/signUp';
import AccountRecovery from './pages/accountRecovery'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
     
  
    <BrowserRouter>
<div>
  <Navigation/>
  <Routes>
  <Route path="/" element={<Home/>}>
           
        
           </Route>
           <Route path="/home" element={<Home/>}></Route>
           <Route path="/services" element={<Services/>}/>
           
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/terms" element={<Terms/>}/>
           <Route path="/vacancy" element={<Vacancy/>}/>
           <Route path ="/jobDet" element={<JobDetails/>}/>
           <Route path ="/jobApplication" element ={<JobApp/>}/>
           <Route path ="/signUp" element ={<SignUp/>}/>
           <Route path ="/accountRecovery" element ={<AccountRecovery/>}/>
           <Route path="*" element={
           <div className="errorPage">
            <h1 className="mt-5">

           
              ERROR 404
            </h1>
            </div>
           }/>
  </Routes>
<FooterNew/>
</div>
    
    </BrowserRouter>
  </React.StrictMode>
    
  
);


