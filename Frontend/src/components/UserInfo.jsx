import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/User.css';

const UserInfo = () => {
  return (
    <div className="user-info-container d-flex justify-content-between mb-4">
      <div className="user-card p-3">
        <h5>Dianne Russell</h5>
        <p>Customer</p>
        <a href="#">Edit Profile</a>
      </div>
      <div className="user-card p-3">
        <h5>BILLING ADDRESS</h5>
        <p>Dianne Russell</p>
        <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
        <p>dianne.ressell@gmail.com</p>
        <p>(671) 555-0110</p>
        <a href="#">Edit Address</a>
      </div>
    </div>
  );
};

export default UserInfo;
