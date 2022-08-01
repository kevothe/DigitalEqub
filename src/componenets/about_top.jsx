
import '.././sass/app.scss';
import tempCbe from '.././assets/cbe.png';
export default function AboutTop() {
    
  return (
    <div className=" about_det d-flex flex-column flex-lg-row  mx-1 my-5 justify-content-center mt-4 text-black pt-5 ">
<div className=" col-6 md-4 mx-4 px-3 pr-3">
<div className="img_title">
            
    <h3>ABOUT</h3>
        </div>
        
    <p>
          Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tristique senectus et netus et malesuada fames ac. Ac odio tempor orci dapibus ultrices in iaculis.
    </p>
</div>



<div className="col-md-4 px-0 mr-5 d-none d-md-block">

<div className="aboutImage px-5 py-5">
 <img className=" img-fluid"src={tempCbe} alt=""/>
               
</div>
                 </div>
</div>
  );}