import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container} from "react-bootstrap";
import '.././sass/app.scss';
export default function Navigation() {
  return (
    <div className="nav_det fixed-top">
<Navbar bg="none"  expand="lg">
      <Container className="py-4 mx-0  fixed-top d-flex flex-row bg-white" >
        <Navbar.Brand className="navbrand pl-4" href="#home"><img className=" pl-5 w-25" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/logoPic.png')}  alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ml-4" id="basic-navbar-nav">

          <Nav className=" float-right ml-5">
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
      </Container>
    </Navbar>
    </div>

  );
}

