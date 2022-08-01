import 'react-bootstrap';
import '.././sass/app.scss';

import logo from '.././assets/Artboard 1@15x.png'

export default function FtBox() {
  return (
    <div style={{ background: 'linear-gradient(to right, rgba(50,186,134, 0.8), rgba(227,198,127,0.5))' }}
    className=" foot_det d-flex flex-row  mx-1 justify-content-center mt-4 text-white pt-5 ">
<div className=" col-6 md-4 mx-4 px-3">
<div className="ftTitle mt-5">
           
    <h3>Reliability</h3>
        </div>
        
    <p>
          Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tristique senectus et netus et malesuada fames ac. Ac odio tempor orci dapibus ultrices in iaculis.
    </p>
</div>



<div className="col-md-3 px-0 mr-5">

<div>
 <img className=" img-fluid"src={logo} alt=""/>
               
</div>
                 </div>
</div>
   
  );}