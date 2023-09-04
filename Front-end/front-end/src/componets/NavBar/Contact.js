import React, { useState } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });
  
      if (response.ok) {
        console.log('Form data submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="contact-form">
        <form >
          <div className="form-group">
            <p>Contact Us</p>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <button id='send' type="submit" onClick={handleSubmit}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
