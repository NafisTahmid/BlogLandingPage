import React from 'react';
import './NewsFeed.css'
import imageThirteen from '../../images/13.jpg'
import imageForteen from '../../images/14.jpg'
import imageFifteen from '../../images/15.jpg'
import imageSixteen from '../../images/16.jpg'
import imageSeventeen from '../../images/17.jpg'
import imageEighteen from '../../images/18.jpg'

const NewsFeed = () => {
    return (
        <div className="bg-brand pt-5">
        <div className="container-fluid">

            <div className="container pt-5">

                <div className="row">

                    <div className="d-flex justify-content-end">

                        <div className="col-sm-6 mb-4">
                            <h3 className="fw-bold fs-6 ps-4">News Feed</h3>
                        </div>

                        <div className="col-sm-6 mb-4 text-end ms-auto">
                            <h3 className="fw-bold fs-6 pe-4">View All</h3>
                        </div>
                    </div>

                    
                </div>
               
                <div className="row">

                    <div className="col-sm-4 py-3">
                        <img width="376" className="img-fluid mx-auto d-block rounded" src={imageThirteen} alt="" />
                        <h2 style={{textAlign: "justify"}} className="fs-6 my-3 ps-3 body-text lh-sm cursor-pointer"><b>How To Choose Your Purpose Filled Career</b> <span className="text-brand_light">Comfortable clothes that every man should own</span></h2>
                        <p className="font-sm ps-3"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                    </div>

                    <div className="col-sm-4 py-3">
                        <img width="376" className="img-fluid mx-auto d-block rounded" src={imageForteen} alt="" />
                        <h2 style={{textAlign: "justify"}} className="fs-6 my-3 ps-3 body-text lh-sm cursor-pointer"><b>What Do You Do When The Doorbell Rings?</b> <span className="text-brand_light">The best fashion tips for the successful modern male</span></h2>
                        <p className="font-sm ps-3"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                    </div>

                    <div className="col-sm-4 py-3">

                        <img width="376" className="img-fluid mx-auto d-block rounded" src={imageFifteen} alt="" />
                        <h2 style={{textAlign: "justify"}} className="fs-6 my-3 ps-3 body-text lh-sm cursor-pointer"><strong>151 Healthy Habits That Will Transform Your Life </strong><span className="text-brand_light">Natural ways to boost your mood this winter</span></h2>
                        <p className="font-sm ps-3"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>

                    </div>

                </div>

                 
                <div className="row">

                    <div className="col-sm-4 py-3">
                        <img width="376" className="img-fluid mx-auto d-block rounded" src={imageSixteen} alt="" />
                        <h2 style={{textAlign: "justify"}} className="fs-6 my-3 ps-3 body-text lh-sm cursor-pointer"><b>How Do A Healthy Body Detox Challenge?</b> <span className="text-brand_light">The realisation can make life a lot less stressful</span></h2>
                        <p className="font-sm ps-3"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                    </div>

                    <div className="col-sm-4 py-3">
                        <img width="376" className="img-fluid mx-auto d-block rounded" src={imageSeventeen} alt="" />
                        <h2 style={{textAlign: "justify"}} className="fs-6 my-3 ps-3 body-text lh-sm cursor-pointer"><b>10 Easy Ways to Start Saving Money Every Day</b> <span className="text-brand_light">How to correctly find help for someone who needs it</span></h2>
                        <p className="font-sm ps-3"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>
                    </div>

                    <div className="col-sm-4 py-3">

                        <img width="376" className="img-fluid mx-auto d-block rounded" src={imageEighteen} alt="" />
                        <h2 style={{textAlign: "justify"}} className="fs-6 my-3 ps-3 body-text lh-sm cursor-pointer"><strong>How to Build A Rock-Solid Self-Discipline </strong><span className="text-brand_light">Things you must do immediately after you exercise</span></h2>
                        <p className="font-sm ps-3"><small>by <strong>Elliot Alderson</strong> - February 25, 2020</small></p>

                    </div>

                </div>
                
            </div>
        </div>

        <div className="line container"></div>
       
    </div>
    );
};

export default NewsFeed;