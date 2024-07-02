import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/Services.css';

const Services = () => {
    return (
        <div className="container my-5 services-container">
            <div className="text-center mb-4">
                <h2 className="services-title">Our Services</h2>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="service-card text-center p-4">
                        <i className="fas fa-truck fa-4x mb-3"></i>
                        <h5>Delivery Services</h5>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="service-card text-center p-4">
                        <i className="fas fa-exchange-alt fa-4x mb-3"></i>
                        <h5>Shipping & Return</h5>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="service-card text-center p-4">
                        <i className="fas fa-percent fa-4x mb-3"></i>
                        <h5>Promotion</h5>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="service-card text-center p-4">
                        <i className="fas fa-user-clock fa-4x mb-3"></i>
                        <h5>24 Hours Service</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;