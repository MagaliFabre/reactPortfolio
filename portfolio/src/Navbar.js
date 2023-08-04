import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const NavBar = () => {
  let [count, setCount] = useState(0)
  return (
    <nav>
      {/* add div and buttons, class for buttons */}
      <div>
        <button>

        </button>
      </div>
      {count === 3 ? 'three' : ''}
      {count}
      <button 
        onClick={() => setCount(count+1)}
      > 
        Increment </button>
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
    </nav>
  );
};

export default NavBar;
