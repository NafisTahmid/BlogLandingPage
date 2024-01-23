import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='container-fluid mt-5'>
            <div className="container mt-5">
               <div className="row">
                    <div className="col-md-6">
                        <h3 className='fw-bold'>Blueprint</h3>
                        <small>Rutrum elementum, vel elit cursus nulla dui velit quam. Enim, cursus dictumst in nisl eu aenean vel. Quis ultrices tincidunt volutpat, facilisi netus. Dolor volutpat a morbi amet habitant sit est id.</small>
                    </div>

                    <div className="col-md-6 ms-auto">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className='text-muted mb-3 ps-4'>Demos</h3>
                                <ul>
                                    <li className='p-1 pe-5 text-muted'>BLUEPRINT</li>
                                    <li className='p-1 pe-5 text-muted'>#SELFMADE</li>
                                    <li className='p-1 pe-5 text-muted'>VENTURE OCEAN</li>
                                    <li className='p-1 pe-5 text-muted'>MIDSUMMER</li>
                                    <li className='p-1 pe-5 text-muted'>WHITE SPACE</li>
                                    <li className='p-1 pe-5 text-muted'>THE DELICIOUS PROJECT</li>
                                    <li className='p-1 pe-5 text-muted'>THE INFLUENCERS</li>
                                    <li className='p-1 pe-5 text-muted'>STRANGERS</li>
                                    <li className='p-1 pe-5 text-muted'>APARTMENT 172</li>
                                </ul>
                            </div>

                            <div className="col-sm-4">
                                <h3 className='text-muted mb-3 ps-4'>Categories</h3>

                                <ul>
                                    <li className='p-1 pe-5 text-muted'>INTERIOR</li>
                                    <li className='p-1 pe-5 text-muted'>STYLE</li>
                                    <li className='p-1 pe-5 text-muted'>GROWTH</li>
                                    <li className='p-1 pe-5 text-muted'>LIFESTYLE</li>
                                    <li className='p-1 pe-5 text-muted'>HEALTH</li>
                                    <li className='p-1 pe-5 text-muted'>FASHION</li>
                                    <li className='p-1 pe-5 text-muted'>THE INFLUENCERS</li>
                                    <li className='p-1 pe-5 text-muted'>BEAUTY</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>

               </div>
            </div>
            
        </div>
    );
};

export default Footer;