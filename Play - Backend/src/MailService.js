const nodemailer = require('nodemailer');
require('dotenv').config();

const user_mail = process.env.USER_MAIL;
const pass = process.env.MAIL_PASS;

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user_mail,
    pass: pass,
  },
});

// reusable function
const sendMail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: user_mail,
      to,
      subject,
      text,
    };

    const info = await transport.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendMail;