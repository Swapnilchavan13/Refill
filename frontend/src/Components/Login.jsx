import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';
import '../Styles/login.css';

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <input
          className="login-input"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          className="login-input"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
