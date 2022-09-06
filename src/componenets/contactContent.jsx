

import "react-bootstrap";
import '.././sass/app.scss';
import Map from "./map";
import ContForm from "./contactForm";
export default function ContactBody() {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  } 
 
  return (
<div className=" about_det d-flex flex-column flex-lg-row  mx-1 justify-content-center mt-2 text-white pt-4 ">
<div className=" col-lg-6 col-11 md-4 mx-4 px-0  mb-3" style={{overflow:'hidden'}}>
    
<Map location={location} zoomLevel={17} /> </div>     




<div className="col-lg-4 col-6 col px-0 mr-5">
<ContForm/>
                 </div>
</div>
  );
}

