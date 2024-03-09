import React from 'react';
import './css/navbar.css'; 
import { useState } from 'react';
import hamburgeropen from './assets/menu.svg';
import hamburgerclose from './assets/close.svg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">Munch</span>
        <span> restaurant piet retief</span>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? (
          <img src={hamburgerclose} alt="Close Menu" />
        ) : (
          <img src={hamburgeropen} alt="Open Menu" />
        )}
      </button>
      <ul className={`navbar-nav ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <a href="#home" className="nav-link" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#menu" className="nav-link" onClick={toggleMenu}>
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#footer" className="nav-link" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
