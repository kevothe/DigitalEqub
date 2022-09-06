import React from "react";
import '.././sass/app.scss';
import image from '../assets/money-605075.jpg';
import playStore from '.././assets/download-1.png';
import logo from '.././assets/logoPic.png';
import appStore from '.././assets/download-2.png';
export default function News() {

    return (
        <>

            <div className="  newsCon  flex-column flex-lg-row mx-0  mt-5 text-black  d-flex" >
                <div className="cont col-8 d-flex flex-column  px-5 py-3" style={{
                    backgroundImage: `url(${image})`
                }}>
                    <h1 className="mt-5 text-success text-sm-end text-lg-start" >
                        Digital Equb
                    </h1>
                    <h1 className="mt-3 text-sm-end text-lg-start">
                        ልዩነትአችን ዋስትናችን ነው
                    </h1>
                    <div className="mt-5 text-sm-end text-lg-start">
                        <a href="https://play.google.com/store/apps/details?id=com.digital.equb" target="_blank" class="ctn_footer" rel="noreferrer" > <img src={appStore} alt="" /></a>

                    </div>
                    <div className="pt-4 text-sm-end text-lg-start">

                        <a href="https://apps.apple.com/us/app/digital-equb/id1592078361" target="_blank" class="ctn_footer" rel="noreferrer"><img src={playStore} alt="" /></a>

                    </div>
                </div>
                <div className="newsBox col-4  ml-0 mr-0 d-none d-md-flex flex-column overflow-auto">
                    <div className="newsContainer border-bottom-2 d-flex flex-row">
                        <div className="newsImage col-4">
                            <img className="w-75 image-fluid d-none d-lg-block" src={logo} alt="" />
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
                            <img className="w-75 image-fluid d-none d-lg-block" src={logo} alt="" />
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
                            <img className="w-75 image-fluid d-none d-lg-block" src={logo} alt="" />
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
                            <img className="w-75 image-fluid d-none d-lg-block" src={logo} alt="" />
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
                            <img className="w-75 image-fluid d-none d-lg-block" src={logo} alt="" />
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
                            <img className="w-75 image-fluid d-none d-lg-block" src={logo} alt="" />
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
                            <img className="w-75 image-fluid d-none d-lg-block" src={logo} alt="" />
                        </div>
                        <div className="newsDetails">
                            <p className>
                                news
                            </p>
                            <a href ="gh"className="mt-0 pt-0 ">
                                sdkhf dskjfhf jdfh fdsfh dfh didf
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}