// FeatureCard.js
import React from 'react';
import '../assets/css/Feature.css';

const features = [
  {
    icon: 'fa-shipping-fast',
    title: 'Free Shipping',
    description: 'Free shipping with discount',
  },
  {
    icon: 'fa-headset',
    title: 'Great Support 24/7',
    description: 'Instant access to Contact',
  },
  {
    icon: 'fa-lock',
    title: '100% Secure Payment',
    description: 'We ensure your money is save',
  },
  {
    icon: 'fa-undo-alt',
    title: 'Money-Back Guarantee',
    description: '30 days money-back guarantee',
  },
];

const FeatureCard = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row feature-row">
        {features.map((feature, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-3">
            <div className={`card feature-card text-center h-100 ${index < features.length - 1 ? 'border-right' : ''}`}>
              <div className="card-body">
                <div className="icon-wrapper">
                  <i className={`fas ${feature.icon} fa-2x text-success`}></i>
                </div>
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
