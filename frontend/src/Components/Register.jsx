import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/authActions';
import '../Styles/register.css';

export const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userInfo));
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleFormSubmit}>
        <input
          className="register-input"
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          className="register-input"
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          className="register-input"
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
