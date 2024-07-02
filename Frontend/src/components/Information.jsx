import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Information.css'; // Asegúrate de ajustar la ruta según tu estructura de proyecto
import organicFoodImage from '../assets/images/About/main1.png';

const Information = () => {
    return (
        <div className="container information-container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 information-text">
                    <h1 className="fw-bold text-dark information-title" style={{ fontSize: '4rem' }}>100% Trusted Organic Food Store</h1>
                    <p className="text-dark" style={{ fontSize: '1.4rem' }}>
                        Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                    </p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={organicFoodImage} alt="Organic Food" className="img-fluid rounded" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    );
};

export default Information;
