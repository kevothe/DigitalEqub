import React from "react";
import '.././sass/app.scss';
import image from '../assets/adult-18377_1920.jpg';
import playStore from'.././assets/download-1.png';
import logo from'.././assets/logoPic.png';
import appStore from '.././assets/download-2.png';
export default function News() {
    
  return (
    <>




<div className="  newsCon  flex-column flex-lg-row mx-0  mt-5 text-black  d-flex" >
    <div className="cont col-8 d-flex flex-column  px-5 py-3" style={{
       backgroundImage: `url(${image})`
    }}>
        <h1 className="mt-5 text-success" >
            Digital Equb
            </h1>
            <h1 className="mt-3">
            liyunetachen wastenachen nw
            </h1>
            <div className="mt-5">
<a href="https://play.google.com/store/apps/details?id=com.digital.equb" class="ctn_footer" > <img src={appStore} alt=""/></a>
               
</div>
<div className="pt-4 ">
<a href="https://apps.apple.com/us/app/digital-equb" class="ctn_footer"><img src={playStore} alt=""/></a>
 
</div>
        </div>
          <div className="newsBox col-4 ml-0 d-none d-md-flex flex-column overflow-auto">
            <div className="newsContainer border-bottom-2 d-flex flex-row">
                <div className="newsImage col-4">
     <img className="w-75 image-fluid" src={logo} alt=""/>
     </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="newsContainer   d-flex flex-row">
                <div className="newsImage col-4">
     <img className="w-75 image-fluid" src={logo} alt="" />
     </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="newsContainer   d-flex flex-row">
                <div className="newsImage col-4">
     <img className="w-75 image-fluid" src={logo} alt=""/>
     </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="newsContainer   d-flex flex-row">
                <div className="newsImage col-4">
     <img className="w-75 image-fluid" src={logo} alt=""/>
     </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="newsContainer   d-flex flex-row">
                <div className="newsImage col-4">
     <img className="w-75 image-fluid" src={logo}alt="" />
     </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="newsContainer   d-flex flex-row">
                <div className="newsImage col-4">
     <img className="w-75 image-fluid" src={logo} alt=""/>
     </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
            <div className="newsContainer   d-flex flex-row">
                <div className="newsImage col-4">
     <img className="w-75 image-fluid" src={logo} alt=""/>
     </div>
     <div className="newsDetails">
        <p>
            news
            </p>
            <p className="mt-0 pt-0">
                sdkhf dskjfhf jdfh fdsfh dfh didf 
                </p>
        </div>
            </div>
        </div>
    </div>
   </>
);
}