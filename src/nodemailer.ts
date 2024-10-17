
import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,//587,
  secure: true,
  auth: {
    user: 'autoreply.pointmedical@gmail.com',
    pass: 'lkcgorwgwrjnhuqh',
  },
})
