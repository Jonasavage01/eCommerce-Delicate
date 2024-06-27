import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import '../assets/css/ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons';

import strawberryImg from '../assets/images/products/img-2.png';
import lemonImg from '../assets/images/products/img-3.png';
import appleImg from '../assets/images/products/img-4.png';
import berryImg from '../assets/images/products/img-5.png';
import orangeImg from '../assets/images/products/img-6.png';
import grapesImg from '../assets/images/products/img-2.png';
import kiwiImg from '../assets/images/products/img-1.png';

const products = [
  { id: 1, title: 'Strawberry', price: '85$', imgSrc: strawberryImg },
  { id: 2, title: 'Berry', price: '70$', imgSrc: berryImg },
  { id: 3, title: 'Lemon', price: '35$', imgSrc: lemonImg },
  { id: 4, title: 'Apple', price: '50$', imgSrc: appleImg },
  { id: 5, title: 'Banana', price: '25$', imgSrc: lemonImg },
  { id: 6, title: 'Orange', price: '40$', imgSrc: orangeImg },
  { id: 7, title: 'Grapes', price: '65$', imgSrc: grapesImg },
  { id: 8, title: 'Kiwi', price: '90$', imgSrc: kiwiImg },
];

const ProductsShop = memo(() => {
  return (
    <div className="container py-4">
      <h2 className="section-title">Our <span>Products</span></h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-3 mb-4">
            <Link to={`/product/${product.id}`} className="card product-card">
              <LazyLoad height={300} offset={100} once>
                <img src={product.imgSrc} alt={product.title} className="card-img-top" />
              </LazyLoad>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProductsShop;
