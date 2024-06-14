// ProductCard.js
import React from 'react';
import '../assets/css/ProductCard.css';

// Importación de imágenes
import strawberryImg from '../assets/images/strawberry.jpg';
import berryImg from '../assets/images/berry.jpg';
import lemonImg from '../assets/images/lemon.jpg';
import appleImg from '../assets/images/apple.jpg';
import bananaImg from '../assets/images/banana.jpg';
import orangeImg from '../assets/images/orange.jpg';
import grapesImg from '../assets/images/grapes.jpg';
import watermelonImg from '../assets/images/watermelon.jpg';

const products = [
  { title: 'Strawberry', price: '85$', imgSrc: strawberryImg },
  { title: 'Berry', price: '70$', imgSrc: berryImg },
  { title: 'Lemon', price: '35$', imgSrc: lemonImg },
  { title: 'Apple', price: '50$', imgSrc: appleImg },
  { title: 'Banana', price: '25$', imgSrc: bananaImg },
  { title: 'Orange', price: '40$', imgSrc: orangeImg },
  { title: 'Grapes', price: '65$', imgSrc: grapesImg },
  { title: 'Watermelon', price: '90$', imgSrc: watermelonImg },
];

const ProductCard = () => {
  return (
    <div className="container py-4">
      <h2 className="section-title">Our <span>Products</span></h2>
      <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card product-card">
              <img src={product.imgSrc} alt={product.title} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
