import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import UserInfo from '../components/UserInfo';
import OrderHistory from '../components/OrderHistory';

const UserPageContainer = styled.div`
  margin-top: 5%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  margin-bottom: 1rem;

  @media(min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const MainContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const UserPage = () => {
  return (
    <UserPageContainer>
      <Sidebar>
        <Navigation />
      </Sidebar>
      <MainContent>
        <UserInfo />
        <OrderHistory />
      </MainContent>
    </UserPageContainer>
  );
};

export default UserPage;
