import React from 'react';
import photo from './resume.png'

const Resume = () => {
    return (
        <div className='main-container'>
            <div className="page-content">
                <h1>Resume</h1>
                <h2>Click the button below to download my resume:</h2>
                <div className='button-container'>
                <a href="/resume.pdf" download className="btn">
                    Download Resume
                </a>
                </div>
                
                <div className='photo'><img src={photo} alt="My Photo" style={{ maxWidth: '80%', height: 'auto' }} /></div>
            </div>
        </div >
    );
};

export default Resume;
