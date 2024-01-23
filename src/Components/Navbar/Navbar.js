import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav style={{boxShadow:"0 1px 5px #c4c4c4"}} className="navbar navbar-expand-lg sticky-top bg-light">
            <div className="container">
                <a className="navbar-brand fw-bold" href="/">BluePrint</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center ms-5">
                        
                        <a className="nav-link" href="/">BLOCKS</a>
                        <a className="nav-link" href="/">DEMOS</a>
                        <a className="nav-link" href="/">FEATURES</a>
                        <a className="nav-link" href="/">POST</a>
                        <a className="nav-link" href="/">CATEGORIES</a>
                        <a className="nav-link" href="/">SHOP</a>
                    
                    </div>

                    <div className="navbar-nav text-center ms-auto">
                        
                        <a className="nav-link" href="/"><button className="btn-blue-print py-2 w-100">BUY BLUEPRINT</button></a>
                       
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;