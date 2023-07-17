import React, { useState } from 'react';
import '../Styles/hamburger.css';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/buy">
            <h3>Buy Fuel</h3>
          </Link></li>
          <li> <Link to="/register">
           <h3>Register</h3>
          </Link></li>
          <li> <Link to="/login">
            <h3>Login</h3>
          </Link></li>
          
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
