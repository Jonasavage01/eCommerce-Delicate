import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import '../assets/css/RegisterPage.css';
import RegisterImage from '../assets/images/RegisterLogin/register.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    axiosInstance.post('register/', {
      email: email,
      password: password
    }).catch(() => setError('An error occurred, please try again later.'));
  };

  return (
    <div className="register-container vh-100 d-flex justify-content-center align-items-center">
      <div className="register-card p-5">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-center mb-5">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 input-group">
                  <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4 input-group">
                  <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4 input-group">
                  <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
              <div className="text-center my-4">or</div>
              <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-google w-48">
                  <FontAwesomeIcon icon={faGoogle} /> Register with Google
                </button>
                <button className="btn btn-facebook w-48">
                  <FontAwesomeIcon icon={faFacebook} /> Register with Facebook
                </button>
              </div>
              <a href="/login" className="text-decoration-none mt-4 d-block text-center">I am already a member</a>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src={RegisterImage} alt="Register" className="img-fluid rounded-end" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
