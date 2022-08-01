import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav} from "react-bootstrap";
import Logo from '.././assets/Artboard 1@15x.png';
import '.././sass/app.scss';
export default function Navigation() {
  return (
    <div className="nav_det fixed-top bg-white pt-4 px-5 pd-1">
<Navbar bg="none"  expand="lg">
     
        <Navbar.Brand className="navbrand px-0 py-0 " href="/"><img className=" w-100 " src={Logo}  alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ml-4" id="basic-navbar-nav">

          <Nav className="  ml-5 justify-content-center">
          <LinkContainer to="/home">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="./services">
            <Nav.Link >Services</Nav.Link>
            </LinkContainer>
            
           <LinkContainer to="./contact">
           <Nav.Link >Contact us</Nav.Link>
           </LinkContainer>
           <LinkContainer to="./about">
             <Nav.Link >About</Nav.Link>
             </LinkContainer>
           
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>

  );
}


