import React, { useState } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <>
    <div className='form'>

      <h2>
        Please fill out the form below to get in touch.
      </h2>

      <form action="https://api.web3forms.com/submit" method="POST" className='contact-form form-group'>
      <input type="hidden" name="apikey" value="ee906585-ee24-4a6e-a489-fb638abf191b"/>
        <div>
          <label>Name:</label>
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>


          <div className='button-container'>
          <Link to="/about" className="btn">
            About me
          </Link>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
        </>
  );
};

const Contact = () => {
  return (
    <div className="page-content main-container">
      <h1>Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
