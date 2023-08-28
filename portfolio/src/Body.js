import React from 'react';
import { Link } from 'react-router-dom';
import photo from './photop.jpg';

const Body = () => {
  return (
    <div className='main-container'>
      <div className="page-content">
        <h1>Welcome to My Portfolio</h1>
        <h2>Welcome to my digital learning playground! I'm a dedicated Pedagogical Engineer and Online Learning Design Specialist, currently immersing myself in the world of full-stack development.</h2>
        <h2>As a passionate advocate for shaping the future of education, I'm excited to combine my expertise in learning design with my journey in acquiring full-stack development skills.</h2>
        <h2>Here, you'll find a curated collection of my experiences, from designing engaging courses to orchestrating seamless digital transformations. Join me on this transformative learning journey as we explore the exciting intersection of pedagogy, innovation, and my evolving full-stack development journey. Together, we'll bridge the gap between education and technology, unlocking new possibilities for learning and growth.</h2>
        <p>Explore more about me and get in touch!</p>

        <div className='photo'><img src={photo} alt="My Photo" style={{ maxWidth: '50%', height: 'auto' }} /></div>

        <div className='button-container'>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
          <Link to="/about" className="btn">
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
