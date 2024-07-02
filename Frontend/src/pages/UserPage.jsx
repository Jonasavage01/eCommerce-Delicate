import React from 'react';
import Navigation from './Navigation';
import UserInfo from './UserInfo';
import OrderHistory from './OrderHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/User.css';

const UserPage = () => {
  return (
    <div className="user-page-container">
      <div className="row">
        <div className="col-lg-3">
          <Navigation />
        </div>
        <div className="col-lg-9">
          <UserInfo />
          <OrderHistory />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
