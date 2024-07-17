// Navigation.js
import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  padding-top: 5%;
  margin-top: 10%;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  i {
    margin-right: 0.5rem;
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul className="list-unstyled">
        <li>
          <NavLink href="/UserPage">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink href="/OrderHistoryPage">
            <i className="fas fa-history"></i> Order History
          </NavLink>
        </li>
        <li>
          <NavLink href="#">
            <i className="fas fa-shopping-cart"></i> Shopping Cart
          </NavLink>
        </li>
        <li>
          <NavLink href="/settings">
            <i className="fas fa-cog"></i> Settings
          </NavLink>
        </li>
        <li>
          <NavLink href="#">
            <i className="fas fa-sign-out-alt"></i> Log-out
          </NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;