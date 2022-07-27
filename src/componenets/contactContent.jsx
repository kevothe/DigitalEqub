

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
<div className=" about_det d-flex flex-row  mx-1 justify-content-center mt-4 text-white pt-5 ">
<div className=" col-6 md-4 mx-4 px-0 bg-black mb-3" style={{overflow:'hidden'}}>
    
<Map location={location} zoomLevel={17} /> </div>     




<div className="col-md-4 px-0 mr-5">
<ContForm/>
                 </div>
</div>
  );
}

