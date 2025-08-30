const KidsModel = require('./Model');
const nodemailer = require('nodemailer');
const sendMail = require('./MailService');
require('dotenv').config();

const user_mail = process.env.USER_MAIL;
const pass = process.env.MAIL_PASS;

const Createlist = async (req, res) => {
    try {
        const createdata = req.body;
        const storedata = new KidsModel(createdata);
        await storedata.save();
        res.status(201).json({ message: "List created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Internal server error" });
    }
};

const GetList = async (req, res) => {
  try {
    const id = req.params.id;
    const getlist = await KidsModel.find()
    res.status(200).send({message: "List fetched successfully",data: getlist});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const UpdateList = async(req,res) =>{
    try{
        const {id} = req.params;
        const updatelist = req.body;
        const updateuser = await KidsModel.findByIdAndUpdate(id,{...updatelist},{new:true})
        res.status(200).send({message:"List updated successfully",data:updateuser})
    }catch(err) {
        res.status(500).send({error:"Internal server error"})
}
}

//Admission Form
const AdmissionForm = async (req, res) => {
  try {
    const { childName, dob, gender, parentName, contact, email, address, message } = req.body;

    
    const adminMessage = `
    New Admission Form Submission:

    Child's Full Name: ${childName}
    Date of Birth: ${dob}
    Gender: ${gender}
    Parent/Guardian: ${parentName}
    Contact Number: ${contact}
    Email: ${email}
    Address: ${address}
    Additional Message: ${message}
    `;

    
    await sendMail(
      email || process.env.USER_MAIL,
      "New Admission Form Submission",
      adminMessage
    );

    
    const userMessage = `
        Dear ${parentName || "Parent/Guardian"},

        Thank you for submitting the admission form for ${childName || "your child"}.

        We have successfully received your application. 
        Our admissions team will review the details and get in touch with you shortly.

        If you have any questions, please reply to this email.

        Best regards,  
        Play School Admissions Team
    `;

    await sendMail(
      email,
      "Admission Form Received - Play School",
      userMessage
    );

    res.status(200).send({
      message: "Admission form submitted successfully & emails sent",
    });
  } catch (err) {
    console.error("Error in AdmissionForm:", err);
    res.status(500).send({ message: "Failed to send email", err });
  }
};



//Contact form
const Contactform = async (req, res) => {

  try {
    const { firstName, lastName, email, mobile, city, state } = req.body;
    const adminMessage = `
      📩 New Contact Form Submission:
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Mobile: ${mobile}
      City: ${city}
      State: ${state}
    `;
    await sendMail(
     email || process.env.USER_MAIL,
      "New Contact Form Submission",
      adminMessage
    );
    const userMessage = `
      Hi ${firstName || "there"},

      We have received your contact form submission.
      Our team will get back to you shortly.

      Thank you for reaching out to Play School! 
    `;

    await sendMail(
      email,
      "Thanks for contacting Dreamland Kids Play World",
      userMessage
    );

    res.status(200).send({
      message: "Form submitted successfully & emails sent",
    });
  } catch (err) {
    console.error("Error in Contactform:", err);
    res.status(500).send({ message: "Failed to send email" });
  }
};


module.exports = { 
    Createlist,
    GetList,
    UpdateList,
    Contactform,
    AdmissionForm
 };
