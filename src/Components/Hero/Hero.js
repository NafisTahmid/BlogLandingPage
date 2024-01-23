import React from 'react';
import './Hero.css'
import videoOne from '../../videos/1.mp4'
const Hero = () => {
    return (
        <div className="bg-brand container-fluid">

            <div className="container">

                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6 my-3">
                            <span style={{backgroundColor: "lightgrey", fontSize:"10px"}} className="px-2 py-1">STYLE</span>
                            <h1 className="header-text cursor-pointer"><b>Tartan: an Elegant Lifestyle Collection with a Modern Twist on Tradition</b> <span className="text-brand_light">This season's collection is split into two main drops.</span></h1>
                            <p className="font-sm"><small>by <strong>Joanna Wellick</strong> - February 25, 2020</small></p>
                    </div>

                    <div className="col-sm-6 my-5">

                        <div className="ratio ratio-16x9">
                            <video src={videoOne} controls></video>
                        </div>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Hero;