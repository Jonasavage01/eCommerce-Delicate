import React from 'react';
import '../assets/css/Instagram.css';
import img1 from '../assets/images/Instagram/insta-image1.jpg';
import img2 from '../assets/images/Instagram/insta-image2.jpg';
import img3 from '../assets/images/Instagram/insta-image3.jpg';
import img4 from '../assets/images/Instagram/insta-image4.jpg';
import img5 from '../assets/images/Instagram/insta-image5.jpg';
import img6 from '../assets/images/Instagram/insta-image6.jpg';

const InstagramSection = () => {
    return (
        <section id="instagram" className="padding-large">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title3">Follow our <span>Instagram </span> </h2>
                </div>
                
                <div className="row d-flex flex-wrap justify-content-center">
                    <div className="col-lg-2 col-md-4 col-4">
                        <figure className="zoom-effect">
                            <img src={img1} alt="instagram" className="insta-image" />
                            <i className="fab fa-instagram icon-instagram"></i>
                        </figure>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <figure className="zoom-effect">
                            <img src={img2} alt="instagram" className="insta-image" />
                            <i className="fab fa-instagram icon-instagram"></i>
                        </figure>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <figure className="zoom-effect">
                            <img src={img3} alt="instagram" className="insta-image" />
                            <i className="fab fa-instagram icon-instagram"></i>
                        </figure>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <figure className="zoom-effect">
                            <img src={img4} alt="instagram" className="insta-image" />
                            <i className="fab fa-instagram icon-instagram"></i>
                        </figure>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <figure className="zoom-effect">
                            <img src={img5} alt="instagram" className="insta-image" />
                            <i className="fab fa-instagram icon-instagram"></i>
                        </figure>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <figure className="zoom-effect">
                            <img src={img6} alt="instagram" className="insta-image" />
                            <i className="fab fa-instagram icon-instagram"></i>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
