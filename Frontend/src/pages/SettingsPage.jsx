import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/User.css';

const SettingsPage = () => {
  return (
    <div className="user-page-container p-4">
      <div className="row">
        <div className="col-lg-3">
          {/* Aquí se pueden agregar otros elementos de navegación si es necesario */}
        </div>
        <div className="col-lg-9">
          <div className="settings-container">
            <h4>Account Settings</h4>
            <div className="card p-4 mb-4">
              <form>
                <div className="form-group row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Dianne" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Russell" />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="dianne.russell@gmail.com" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" className="form-control" id="phoneNumber" placeholder="(603) 555-0123" />
                </div>
                <button type="submit" className="btn btn-success">Save Changes</button>
              </form>
            </div>

            <h4>Billing Address</h4>
            <div className="card p-4 mb-4">
              <form>
                <div className="form-group row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="billingFirstName">First Name</label>
                    <input type="text" className="form-control" id="billingFirstName" placeholder="Dianne" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="billingLastName">Last Name</label>
                    <input type="text" className="form-control" id="billingLastName" placeholder="Russell" />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="companyName">Company Name (optional)</label>
                  <input type="text" className="form-control" id="companyName" placeholder="Zakirsoft" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input type="text" className="form-control" id="streetAddress" placeholder="4140 Parker Rd." />
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="country">Country / Region</label>
                    <select className="form-control" id="country">
                      <option>United States</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="state">State</label>
                    <select className="form-control" id="state">
                      <option>Washington DC</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" className="form-control" id="zipCode" placeholder="20033" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="billingEmail">Email</label>
                    <input type="email" className="form-control" id="billingEmail" placeholder="dianne.russell@gmail.com" />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="billingPhone">Phone</label>
                  <input type="text" className="form-control" id="billingPhone" placeholder="(603) 555-0123" />
                </div>
                <button type="submit" className="btn btn-success">Save Changes</button>
              </form>
            </div>

            <h4>Change Password</h4>
            <div className="card p-4">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input type="password" className="form-control" id="currentPassword" placeholder="Password" />
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" className="form-control" id="newPassword" placeholder="Password" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
                  </div>
                </div>
                <button type="submit" className="btn btn-success">Change Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
