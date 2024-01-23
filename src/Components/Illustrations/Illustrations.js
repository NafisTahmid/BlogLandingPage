import React from 'react';
import './Illustrations.css'
import imageNine from '../../images/9.jpg'
import imageTen from '../../images/10.jpg'
import imageEleven from '../../images/11.jpg'
import imageTwelve from '../../images/12.jpg'
const Illustrations = () => {
    return (
        <div className="bg-brand pt-2">
            <div className="container-fluid">

                <div className="container pt-5">

                    <div className="row">

                        <div className="d-flex justify-content-end">

                            <div className="col-sm-6 mb-4">
                                <h3 className="fw-bold fs-6 ps-4">Illustrations</h3>
                            </div>

                            <div className="col-sm-6 mb-4 text-end ms-auto">
                                <h3 className="fw-bold fs-6 pe-4">View All</h3>
                            </div>
                        </div>

                        
                    </div>
                   
                    <div className="row">

                        <div className="col-sm-3">
                                <img className="img-fluid mx-auto d-block rounded px-1" src={imageNine} alt="" />
                                <h2 style={{textAlign: "justify"}} className="fs-6 my-3 body-text lh-sm cursor-pointer"><b>Finding Groundedness in the Age of Anxiety.</b> <span className="text-brand_light">Wellness gift for the health fanatic in your life</span></h2>
                                <p className="font-sm ps-1"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>
                        <div className="col-sm-3">
                                <img className="img-fluid mx-auto d-block rounded px-1" src={imageTen} alt="" />
                                <h2 style={{textAlign: "justify"}} className="fs-6 my-3 body-text lh-sm cursor-pointer"><b>Practice Being More Open Hearted in Relationships</b> <span className="text-brand_light">How are people using their extra time while working from home</span></h2>
                                <p className="font-sm ps-1"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>
                        <div className="col-sm-3">
                                <img className="img-fluid mx-auto d-block rounded px-1" src={imageEleven} alt="" />
                                <h2 style={{textAlign: "justify"}} className="fs-6 my-3 body-text lh-sm cursor-pointer"><b>How to Have More Focused Hours in Your Day</b> <span className="text-brand_light">How to fit more reading time into a busy lifestyle.</span></h2>
                                <p className="font-sm ps-1"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>
                        <div className="col-sm-3">
                                <img className="img-fluid mx-auto d-block rounded px-1" src={imageTwelve} alt="" />
                                <h2 style={{textAlign: "justify"}} className="fs-6 my-3 body-text lh-sm cursor-pointer"><b>Meditation: Sitting With Your Basic Goodness</b> <span className="text-brand_light">Top signs that it is time for you to make a career change</span></h2>
                                <p className="font-sm ps-1"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>

                    </div>
                    
                </div>
            </div>

            <div className="line container"></div>
           
        </div>
    )
      
};

export default Illustrations;