import React from 'react';
import '../assets/css/ProductCard.css';

// Importación de imágenes
import strawberryImg from '../assets/images/products/img-2.png';
import lemonImg from '../assets/images/products/img-3.png';
import appleImg from '../assets/images/products/img-4.png';
import berryImg from '../assets/images/products/img-5.png';
import orangeImg from '../assets/images/products/img-6.png';
import grapesImg from '../assets/images/products/img-2.png';
import kiwiImg from '../assets/images/products/img-1.png';
// Importación de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const allProducts = [
  { title: 'Strawberry', price: '85$', imgSrc: strawberryImg },
  { title: 'Berry', price: '70$', imgSrc: berryImg },
  { title: 'Lemon', price: '35$', imgSrc: lemonImg },
  { title: 'Apple', price: '50$', imgSrc: appleImg },
  { title: 'Banana', price: '25$', imgSrc: lemonImg },
  { title: 'Orange', price: '40$', imgSrc: orangeImg },
  { title: 'Grapes', price: '65$', imgSrc: grapesImg },
  { title: 'Kiwi', price: '90$', imgSrc: kiwiImg },
];

const ProductsShop = ({ currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container py-4">
      <div className="row">
        {currentProducts.map((product, index) => (
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
    </div>
  );
};

export default ProductsShop;
