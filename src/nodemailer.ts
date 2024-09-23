
import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,//587,
  secure: true,
  auth: {
    user: 'amulettefun@gmail.com',
    pass: 'vogbxcqqesgvvgrq'
  },
})

//'info@point-medical.com'
//,'Ali@234851'
/*
process.env.SMTP_SENDER_EMAIL
process.env.SMTP_PASSWORD


*/