import React from 'react';
import './MiddleSection.css'
import image from '../../images/girl.jpg'

const MiddleSection = () => {
    return (
        <div className="bg-brand container-fluid">

        <div className="container">

            <div className="row justify-content-center align-items-center">

                <div className="col-sm-8 my-5">

                    <img className="img-fluid mx-auto d-block rounded"src={image} alt="" />

                </div>

                <div className="col-sm-4 my-5">
                        <span style={{backgroundColor: "lightgrey", fontSize:"10px"}} className="px-2 py-1 text-uppercase">Interior</span>
                        <h1 className="header-text cursor-pointer fs-3"><b>4 Common Shopping Falacies and How to Avoid Them</b> <span className="text-brand_light">Ways to become a faster runner that actually aren't miserable</span></h1>
                        <p className="font-sm"><small>by <strong>Joanna Wellick</strong> - February 25, 2020</small></p>
                </div>
              
            </div>
        </div>

        <div className="line container"></div>
       
    </div>
    
    
    );
};

export default MiddleSection;