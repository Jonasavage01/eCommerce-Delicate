import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/css/Hero.css';
import Background from "../assets/images/hero/Hero.jpg"

const HeroSection = () => {
    return (
        <div className="hero-section position-relative d-flex align-items-center justify-content-center text-center">
            <img src={Background} alt="Hero" className="hero-image position-absolute w-100 h-100" />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="content text-white position-relative">
                <p className="small-title fs-2 mb-3">Fresh & Organic</p>
                <h1 className="main-title display-1 fw-bold mb-4">Jabones artesanales</h1>
                <a href="shop.html" className="btn btn-lg custom-btn">Shop Now</a>
            </div>
        </div>
    );
};

export default HeroSection;
