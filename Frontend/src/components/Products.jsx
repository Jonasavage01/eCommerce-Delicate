import React from 'react';
import '../assets/css/ProductCard.css';

// Importación de imágenes
import strawberryImg from '../assets/images/products/starwberry.jpg';
import lemonImg from '../assets/images/products/lemon.jpg';
import appleImg from '../assets/images/products/apple.jpg';
import berryImg from '../assets/images/products/berry.jpg';
import orangeImg from '../assets/images/products/grapes.jpg';
import grapesImg from '../assets/images/products/starwberry.jpg';
import kiwiImg from '../assets/images/products/kiwi.jpg';
// Importación de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const products = [
  { title: 'Strawberry', price: '85$', imgSrc: strawberryImg },
  { title: 'Berry', price: '70$', imgSrc: berryImg },
  { title: 'Lemon', price: '35$', imgSrc: lemonImg },
  { title: 'Apple', price: '50$', imgSrc: appleImg },
  { title: 'Banana', price: '25$', imgSrc: lemonImg },
  { title: 'Orange', price: '40$', imgSrc: orangeImg },
  { title: 'Grapes', price: '65$', imgSrc: grapesImg },
  { title: 'Kiwi', price: '90$', imgSrc: kiwiImg },
];

const ProductCard = () => {
  return (
    <div className="container py-4">
      <h2 className="section-title">Our <span>Products</span></h2>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card product-card">
              <img src={product.imgSrc} alt={product.title} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-price">{product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
                <div className="icon-overlay">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    <span className="icon-text">Add to Wishlist</span>
                  </div>
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faEye} className="icon-eye" />
                    <span className="icon-text">Quick View</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-primary view-all-btn">
          View All <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
