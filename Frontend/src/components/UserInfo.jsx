import React from 'react';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-top: 5%;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const UserCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  flex: 1;
`;

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <UserCard>
        <h5>Dianne Russell</h5>
        <p>Customer</p>
        <a href="#">Edit Profile</a>
      </UserCard>
      <UserCard>
        <h5>BILLING ADDRESS</h5>
        <p>Dianne Russell</p>
        <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
        <p>dianne.ressell@gmail.com</p>
        <p>(671) 555-0110</p>
        <a href="#">Edit Address</a>
      </UserCard>
    </UserInfoContainer>
  );
};

export default UserInfo;
