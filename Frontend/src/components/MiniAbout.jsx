import React from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/images/mini-about/mini-about.jpg'; 
// Styled Components
const Container = styled.div`
  padding: 5rem 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ColumnLeft = styled.div`
  flex: 1;
  padding: 1rem;
  img {
    width: 90%;
    height: auto;
    border-radius: 15px;
    margin-left: 30px;
  }
`;

const ColumnRight = styled.div`
  flex: 1;
  padding: 0rem;
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
`;

const AboutText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  max-width:90%;
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
          <SinceYear>Since Year 1999</SinceYear>
          <AboutTitle>We are <span>Fruitkha</span></AboutTitle>
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
