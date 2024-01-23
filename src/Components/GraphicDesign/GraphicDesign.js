import React from 'react';
import './GraphicDesign.css'
import imageFour from '../../images/4.jpg'
import imageFive from '../../images/5.jpg'
import imageSix from '../../images/6.jpg'
const GraphicDesign = () => {
    return (
        <div className="bg-brand pt-5">
            <div className="container-fluid">

                <div className="container pt-5">

                    <div className="row">

                        <div className="d-flex justify-content-end">

                            <div className="col-sm-6 mb-4">
                                <h3 className="fw-bold fs-6 ps-4">Graphic Design</h3>
                            </div>

                            <div className="col-sm-6 mb-4 text-end ms-auto">
                                <h3 className="fw-bold fs-6 pe-4">View All</h3>
                            </div>
                        </div>

                        
                    </div>
                   
                    <div className="row">

                        <div className="col-sm-4 py-3">
                            <img width="376" className="img-fluid mx-auto d-block rounded" src={imageFour} alt="" />
                            <h2 style={{textAlign: "justify"}} className="fs-6 my-3 text-center body-text lh-lg cursor-pointer"><b>30 Ethical Fashion Brands You Need To Know</b> <span className="text-brand_light">Thermal leggins that will make your outdoor workout warm and cozy</span></h2>
                            <p className="font-sm"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>

                        <div className="col-sm-4 py-3">
                            <img width="376" className="img-fluid mx-auto d-block rounded" src={imageFive} alt="" />
                            <h2 style={{textAlign: "justify"}} className="fs-6 my-3 text-center body-text lh-lg cursor-pointer"><b>10 Ways To De-Stress Your Day Hour by Hour</b> <span className="text-brand_light">How to plan workout when your mind and body are all over the place</span></h2>
                            <p className="font-sm"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>

                        <div className="col-sm-4 py-3">

                            <img width="376" className="img-fluid mx-auto d-block rounded" src={imageSix} alt="" />
                            <h2 style={{textAlign: "justify"}} className="fs-6 my-3 text-center body-text lh-lg cursor-pointer"><strong>The Art of Creating A Ritual For What Matters Most </strong><span className="text-brand_light">Abs exercise to work the deepest muscle in your core</span></h2>
                            <p className="font-sm"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>

                        </div>

                    </div>
                    
                </div>
            </div>

            <div className="line container"></div>
           
        </div>
    );
};

export default GraphicDesign;