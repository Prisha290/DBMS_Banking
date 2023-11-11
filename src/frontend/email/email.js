import React, { useState } from 'react';
import axios from 'axios';
import AppBar from '../appBar'
// import "./email.css"
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
    <div class="one_div" >
       <AppBar> </AppBar>
      <input class ="i1" type="text" name="subject" placeholder="Subject" onChange={handleInputChange} />
      <textarea class="ta"  name="message" placeholder="Message" onChange={handleInputChange}></textarea>
      <button class="b1" onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default EmailForm;
