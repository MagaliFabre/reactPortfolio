import React from 'react';
import { FaGithub , FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Magali Fabre</p>
    </footer>
  );
};


export default Footer;
