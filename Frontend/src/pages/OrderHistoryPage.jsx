// OrderHistoryPage.js
import React from 'react';
import Navigation from '../components/Navigation';
import OrderHistory from '../components/OrderHistory';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/User.css';

const UserPageContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavigationWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const OrderHistoryWrapper = styled.div`
  flex: 3;
`;

const OrderHistoryPage = () => {
  return (
    <UserPageContainer>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <OrderHistoryWrapper>
        <OrderHistory />
      </OrderHistoryWrapper>
    </UserPageContainer>
  );
};

export default OrderHistoryPage;