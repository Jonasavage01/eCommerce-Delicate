import React, { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #ffffff;
  color: #000000;
  margin-top: 7%;
  padding: 5rem 0;
`;

const InnerContainer = styled.div`
  &.animate__animated.animate__fadeInUp {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
`;

const TextCenter = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const Title = styled.p`
  color: #007bff !important;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 5rem;
  color: #343a40 !important;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Column = styled.div`
  flex: 1;
  min-width: calc(33.333% - 1rem);
  padding-top: ${props => (props.pt ? '5rem' : '0')};
`;

const FactItem = styled.div`
  background-color: #f8f9fa;
  color: #000000;
  text-align: center;
  padding: 5rem;
  height: 100%;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s, margin-top 0.3s;

  &:hover {
    background-color: #e9ecef !important;
    color: #000000 !important;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.1);
    margin-top: -10px;
  }

  h1 {
    font-size: 5rem;
    color: #007bff !important;
    margin-bottom: 3rem;
  }

  h4 {
    margin-bottom: 3rem;
    color: #343a40 !important;
  }

  span {
    color: #343a40 !important;
  }

  &:hover h1,
  &:hover h4,
  &:hover span {
    color: #000000 !important;
  }
`;

const Feature = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container ref={ref}>
      <InnerContainer className={`container ${inView ? 'animate__animated animate__fadeInUp' : ''}`}>
        <TextCenter>
          <Title>Why Choose Us!</Title>
          <Subtitle>The Leading Photo Studio In The Country</Subtitle>
        </TextCenter>
        <Row>
          <Column pt>
            <FactItem>
              <h1>{inView && <CountUp end={50} duration={6} prefix="+" />}</h1>
              <h4>Happy Clients</h4>
              <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
            </FactItem>
          </Column>
          <Column>
            <FactItem>
              <h1>{inView && <CountUp end={5} duration={7} prefix="+" />}</h1>
              <h4>Years Experience</h4>
              <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
            </FactItem>
          </Column>
          <Column pt>
            <FactItem>
              <h1>{inView && <CountUp end={500} duration={6} prefix="+" />}</h1>
              <h4>Portfolio Photos</h4>
              <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
            </FactItem>
          </Column>
        </Row>
      </InnerContainer>
    </Container>
  );
};

export default memo(Feature);
