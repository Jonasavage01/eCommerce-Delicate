import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../assets/css/About-hero.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importación de las imágenes
import Image1 from '../assets/images/About/main1.png';
import Image2 from '../assets/images/About/main2.png';
import Image3 from '../assets/images/About/main3.png';

const AboutHero = () => {
  const [mainImage, setMainImage] = useState(Image1);
  const [fadeClass, setFadeClass] = useState('fade-in');

  const slides = [
    { image: Image1, caption: 'Etiam tristique, metus pretium rutrum elementumv, risus tortor.' },
    { image: Image2, caption: 'Etiam tristique, metus pretium rutrum elementumv, risus tortor.' },
    { image: Image3, caption: 'Etiam tristique, metus pretium rutrum elementumv, risus tortor.' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 250,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => changeImage(slides[current].image),
    arrows: false
  };

  const changeImage = (newImage) => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setMainImage(newImage);
      setFadeClass('fade-in');
    }, 250);
  };

  return (
    <div className="slider-area2">
      <div className={`slider-item-active ${fadeClass}`} style={{ backgroundImage: `url(${mainImage})` }}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-item">
              <div className="slider-height hero-overly d-flex align-items-center justify-content-center">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center">
                      <div className="slide-content">
                        <h1 className="title">About us</h1>
                        <p className="caption">{slide.caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="thumbnail-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => changeImage(slide.image)}
            className="thumbnail"
          >
            <img src={slide.image} alt={`thumb ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutHero;
