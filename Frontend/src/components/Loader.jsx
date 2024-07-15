import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

const SoapIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f28123;
  position: relative;
  animation: ${spin} 2s linear infinite;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f28123;
  }

  &:before {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    animation: ${bounce} 1s infinite ease-in-out;
  }

  &:after {
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    animation: ${bounce} 1s infinite ease-in-out 0.5s;
  }
`;

const LoadingText = styled.p`
  font-family: 'Poppings-regular';
  color: #000;
  margin-top: 20px;
  font-size: 1.5rem;
`;

const Loader = () => (
  <LoaderWrapper>
    <div>
      <SoapIcon />
      <LoadingText>Loading...</LoadingText>
    </div>
  </LoaderWrapper>
);

export default Loader;
