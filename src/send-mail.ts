import { Request, Response } from "express";
import { transporter } from "./nodemailer";

export const sendMail = async (req: Request, res: Response) => {
  const { email: receiverEmail } : any = req.body; 
  console.log('receiver email: ', receiverEmail)


  const mailOptions = {
    from: process.env.SMTP_SENDER_EMAIL,
    to: receiverEmail,
    subject: "You've received a friend request on Amulette!",
    text: `
    Hey User,

    I hope you're doing well!
    This is testing email.

    Best regards,
    Sujan Mridha
		`,
  };

  // console.log("mailOptions: ", mailOptions);

  try {
    const _res = await transporter.sendMail(mailOptions);
    console.log("Email sent response: ", _res);
    if (_res && _res.messageId) {
      return res.status(201).json({
        success: true,
        message: "Mail has been sent!",
      });
    } else {
      res.status(500).json({
        success: false,
        error: _res
      });
    }
    
  } catch (error: any) {
    console.log('sending mail error: ', error);
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
}