import React from 'react';
import './Typography.css'
import imageSeven from '../../images/7.jpg'
import imageEight from '../../images/8.jpg'
const Typography = () => {
    return (
        <div className="bg-brand ">

            <div className="container-fluid">
                <div className="container pt-2">
                    <div className="row">
                        <div className="d-flex justify-content-end">

                            <div className="col-sm-6 mb-3">
                                <h3 className="fw-bold fs-6 ps-4">Typography</h3>
                               
                            </div>

                            <div className="col-sm-6 mb-3 text-end ms-auto">
                                <h3 className="fw-bold fs-6 pe-4">View All</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-sm-6 py-3">
                            <img className="img-fluid mx-auto d-block rounded" src={imageSeven} alt="" />
                            <h2 style={{textAlign: "justify"}} className="fs-6 my-3 px-1 body-text lh-lg cursor-pointer"><b>7 Self Care Rituals For Stressful Days</b> <span className="text-brand_light">Houseparty has redefined the way we hang with friends.</span></h2>
                            <p className="font-sm ps-1"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>

                        <div className="col-sm-6 py-3">
                            <img className="img-fluid mx-auto d-block rounded" src={imageEight} alt="" />
                            <h2 style={{textAlign: "justify"}} className="fs-6 my-3 px-1 body-text lh-lg cursor-pointer"><b>Evening Routing for a Productive Tomorrow</b> <span className="text-brand_light">The ultimate guide to finding and applying the best blush</span></h2>
                            <p className="font-sm ps-1"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="line container"></div>
            
        </div>
    );
};

export default Typography;