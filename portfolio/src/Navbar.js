import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>

<div className="logo">
        <Link to="/">
          <h1>Magali Fabre</h1>
        </Link>
      </div>
      <div className="navbar-container">
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
