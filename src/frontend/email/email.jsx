import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    recipientEmail: '',
    subject: '',
    message: ''
  });

  const sendEmail = async () => {
    try {
      await axios.post('/send-email', emailData);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  return (
    <div>
      <input type="email" name="recipientEmail" placeholder="Recipient Email" onChange={handleInputChange} />
      <input type="text" name="subject" placeholder="Subject" onChange={handleInputChange} />
      <textarea name="message" placeholder="Message" onChange={handleInputChange}></textarea>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default EmailForm;
