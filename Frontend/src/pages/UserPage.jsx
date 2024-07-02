import React from 'react';
import Navigation from '../components/Navigation';
import UserInfo from '../components/UserInfo';
import OrderHistory from '../components/OrderHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/User.css';

const UserPage = () => {
  return (
    <div className="user-page-container p-4">
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