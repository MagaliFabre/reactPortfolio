import React from 'react';
import "./index.css"
import photo from './photo.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='main-container'>
      <div className="page-content">
        <h1>About Me</h1>
        <h2>Experienced Pedagogical Engineer and Online Learning Design Specialist.</h2>
        <h2>I am dedicated to crafting innovative digital learning experiences that cater to user needs and elevate pedagogical practices. With a background in full-stack development and a passion for education technology, I bring expertise in managing and executing digital projects.</h2>
        <h2>My journey includes collaborating with educational institutions and organizations to lead digital transformation initiatives, including the digitization of training programs. From curriculum design to LMS implementation, I have successfully created engaging e-learning content and provided comprehensive support for educators and learners alike. My commitment to enhancing digital education is fueled by a Master's degree in Learning Media and a continuous pursuit of cutting-edge technologies. </h2>
        <h2>Join me in revolutionizing education through seamless integration of technology and learning.</h2>
      </div>
      <div className='photo'>
        <img src={photo} alt="My Photo"width={300} height={300}/>
      </div>
    </div>
  )
}
export default About;