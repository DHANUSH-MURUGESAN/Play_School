const nodemailer = require('nodemailer');
require('dotenv').config();


const user_mail1  =  process.env.USER_MAIL;
const mail_pass = process.env.USER_MAIL;

const transport = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user: user_mail1,
        pass : mail_pass
    },
})

const sendMail = async(to,subject,text) =>{
    try{
        const mailoptions = {
            from: user_mail1,
            to,
            subject,
            text 
        }

        const info = await transport.sendMail(mailoptions)
        console.log("email send",info.response)
        return info
    }catch(error){
        console.log("error sending email : " ,error)
        throw error
    };
};


module.exports = sendMail
