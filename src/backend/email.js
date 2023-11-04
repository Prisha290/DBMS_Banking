const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pri2019senthil@gmail.com',  // Your email address
    pass: 'taid ayrx qljs xmyd'   // Your email password or an app-specific password
  }
});

app.post('/send-email', (req, res) => {
  const { recipientEmail, subject, message } = req.body;

  const mailOptions = {
    from: 'pri2019senthil@gmail.com',
    to: 'pes1202102112@pesu.pes.edu',
    subject: subject,
    text:message
  };

  // Sending email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});
const port =4000
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
