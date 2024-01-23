import React from 'react';
import './Blog.css'
import one from '../../images/1.jpg'
import two from '../../images/2.jpg'
import video from '../../videos/2.mp4'

const Blog = () => {
    return (
        <div className="bg-brand pt-5">
            <div className="container-fluid">

                <div className="container">

                    <div className="row">

                        <div className="col-sm-4 py-3">
                            <img width="376" className="img-fluid mx-auto d-block rounded" src={one} alt="" />
                            <h2 style={{textAlign: "justify"}} className="fs-6 my-3 text-center body-text lh-lg cursor-pointer"><b>How To Enjoy Your Favorite Things Everyday</b> <span className="text-brand_light">Cute date ideas to try if you're tired of staying inside</span></h2>
                            <p className="text-center font-sm"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>

                        <div className="col-sm-4 py-3">
                            <img width="376" className="img-fluid mx-auto d-block rounded" src={two} alt="" />
                            <h2 style={{textAlign: "justify"}} className="fs-6 my-3 text-center body-text lh-lg cursor-pointer"><b>Identify Your Real Treasures and Finally Let Go</b> <span className="text-brand_light">Relationship tips couples therapists are giving all the time.</span></h2>
                            <p className="text-center font-sm"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                        </div>

                        <div className="col-sm-4 py-3">

                        <div className="ratio ratio-16x9">
                                <video src={video} controls></video>
                              
                            </div>
                            <h2 style={{textAlign: "justify"}} className="fs-6 my-3 text-center body-text lh-lg cursor-pointer"><strong>9 Ways to Boost Your Style Confidence and Have More Fun </strong><span className="text-brand_light">Totally normal things to experience in relationship right now.</span></h2>
                            <p className="text-center font-sm"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>

                        </div>

                    </div>
                    
                </div>
            </div>
           
        </div>
    );
};

export default Blog;