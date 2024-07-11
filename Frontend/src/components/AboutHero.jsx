import React, { useState } from 'react';
import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
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
    <SliderArea>
      <SliderItemActive className={fadeClass} mainImage={mainImage}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-item">
              <SliderHeight className="hero-overly d-flex align-items-center justify-content-center">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center">
                      <SlideContent>
                        <Title>About us</Title>
                        <Caption>{slide.caption}</Caption>
                      </SlideContent>
                    </div>
                  </div>
                </div>
              </SliderHeight>
            </div>
          ))}
        </Slider>
      </SliderItemActive>
      <ThumbnailContainer>
        {slides.map((slide, index) => (
          <Thumbnail key={index} onClick={() => changeImage(slide.image)}>
            <img src={slide.image} alt={`thumb ${index + 1}`} />
          </Thumbnail>
        ))}
      </ThumbnailContainer>
    </SliderArea>
  );
};

export default AboutHero;

// Styled-components

const fadeIn = keyframes`
  from { opacity: 0.2; background-color: rgba(255, 255, 255, 1); }
  to { opacity: 1; background-color: rgba(255, 255, 255, 0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; background-color: rgba(255, 255, 255, 0); }
  to { opacity: 0.2; background-color: rgba(255, 255, 255, 1); }
`;

const SliderArea = styled.div`
  position: relative;
  height: 100vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffffff !important;

  @media (max-width: 1200px) {
    height: auto;
  }
`;

const SliderItemActive = styled.div`
  background-image: url(${props => props.mainImage});
  animation: ${props => (props.className === 'fade-in' ? fadeIn : fadeOut)} 0.5s forwards;
  height: 100%;

  .slick-track {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    height: auto;
    background-size: cover;
    background-position: center;
  }
`;

const SliderHeight = styled.div`
  background: none !important;
  height: 100vh;

  @media (max-width: 1200px) {
    height: auto;
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 1200px) {
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 10rem;
  color: #fff;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Pro-text';
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const Caption = styled.p`
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  font-family: 'Poppings-light';

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const ThumbnailContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
  }
`;

const Thumbnail = styled.div`
  cursor: pointer;
  margin: 0 10px;
  transition: transform 0.3s;

  img {
    width: 120px;
    height: 70px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 80px;
      height: 50px;
    }

    @media (max-width: 576px) {
      width: 60px;
      height: 40px;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;
