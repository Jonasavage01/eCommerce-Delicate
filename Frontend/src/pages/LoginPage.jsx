import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../axiosInstance';
import '../assets/css/LoginPage.css';
import LoginImage from '../assets/images/RegisterLogin/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    axiosInstance.post('token/', {
      email: email,
      password: password
    }).then(response => {
      if (response.data.access) {
        login(response.data.access);
      } else {
        setError('Invalid credentials');
      }
    }).catch(() => setError('An error occurred, please try again later.'));
  };

  return (
    <div className="login-container vh-100 d-flex justify-content-center align-items-center">
      <div className="login-card p-5">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-center mb-5">Login</h2>
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
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <div className="text-center my-4">or</div>
              <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-google w-48">
                  <FontAwesomeIcon icon={faGoogle} /> Login with Google
                </button>
                <button className="btn btn-facebook w-48">
                  <FontAwesomeIcon icon={faFacebook} /> Login with Facebook
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src={LoginImage} alt="Login" className="img-fluid rounded-end" />
            <a href="/register" className="text-decoration-none mt-4 d-block text-center">I am not a member yet</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
