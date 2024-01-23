import React from 'react';
import './BluePrint.css'
const BluePrint = () => {
    return (
        <div style={{paddingLeft:"0px"}} className="container-fluid">
                <div className="row mt-5">
                    <div  className="col-sm-6 bg-image d-flex align-items-center justify-content-center my-5 pt-5">
                        <h2 className=" text-white mt-5"><strong className="fw-bold">Let's work & build something</strong> <br />
                        great together.
                        <br />
                        <small className="font-sm">Create a High Performance UI/UX From a Silicon Valley.</small>
                        </h2>
                      
                    </div>
                    <div className="col-sm-6 my-5 pt-5">

                        <div className=" d-flex align-items-center jusfity-content-center mt-5 pt-5">
                            <h1><span className="fs-3">Blueprint</span> <br />
                            
                            <b>Sign Up for Our Newsletters</b> Get notified of the best deals on our WordPress themes.
                            </h1>
                        </div>
                        <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating input-box">
                                    <input type="text" className="form-control " id="floatingInputGrid" placeholder="Enter your name" />
                                    <label for="floatingInputGrid">Enter your name</label>
                                    
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="form-floating input-box">
                                    <input type="email" className="form-control " id="floatingInputGrid" placeholder="Enter your email"
                                    />
                                    <label for="floatingInputGrid">Enter your email</label>
                                    
                                    </div>
                                </div>

                                <div className="col-md pt-3">
                                   <button className="btn-form py-2 w-50 mb-5">SUBSCRIBE</button>
                                </div>
                            </div>
                        
                    </div>
                </div>
        </div>
    );
};

export default BluePrint;