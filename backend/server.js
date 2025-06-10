// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email route
app.post('/send-email', async (req, res) => {
  const { fullName, email, mobileNumber } = req.body;

  if(!fullName || !email || !mobileNumber){
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  // Setup Nodemailer transporter with Gmail SMTP
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,       // your Gmail email
      pass: process.env.EMAIL_PASS        // your Gmail app password
    }
  });

  // Email options
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,           // where you want to receive the form submissions
    subject: `Contact Form Submission from ${fullName}`,
    text: `You have a new currency exchange request:\n\nName: ${fullName}\nEmail: ${email}\nMobile Number: ${mobileNumber}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
