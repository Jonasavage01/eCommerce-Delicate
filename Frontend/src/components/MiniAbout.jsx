import React from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/images/mini-about/mini-about.jpg';

// Styled Components
const Container = styled.div`
  padding: 5rem 1rem;
  text-align: left;
  font-family: Pro-text;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  font-family:Poppings-regular:

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnLeft = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  justify-content: center;
  text-align: left;

  img {
    width: 100%;
    height: auto;
    border-radius: 15px;

    @media (max-width: 768px) {
      width: 80%;
      margin: 0 auto;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

const ColumnRight = styled.div`
  flex: 1;
  padding: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
    padding: 0;
  }
`;

const SinceYear = styled.span`
  font-size: 1.4rem;
  color: #888;
`;

const AboutTitle = styled.h2`
  font-size: 3.2rem;
  margin: 10px 0;

  span {
    color: #f28123;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  max-width: 90%;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const AboutButton = styled.button`
  background-color: #f28123;
  border: none;
  color: white;
  padding: 0.8rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #f28123;
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.7rem 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(242, 129, 35, 0.8);
  border-radius: 50%;
  padding: 20px;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(242, 129, 35, 1);
  }
`;

const MiniAbout = () => {
  return (
    <Container className="about-me">
      <Row>
        <ColumnLeft>
          <ImageContainer>
            <img src={aboutImage} alt="About Me" className="img-fluid rounded" />
          </ImageContainer>
        </ColumnLeft>
        <ColumnRight>
          <SinceYear>Since Year 2022</SinceYear>
          <AboutTitle>We are <span>Delicate</span></AboutTitle>
          <AboutText>
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.
          </AboutText>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.
          </AboutText>
          <AboutButton>
            know more
          </AboutButton>
        </ColumnRight>
      </Row>
    </Container>
  );
};

export default MiniAbout;
