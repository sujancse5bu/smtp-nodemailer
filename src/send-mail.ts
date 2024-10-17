import { Request, Response } from "express";
import { transporter } from "./nodemailer";

export const sendMail = async (req: Request, res: Response) => {
  const {
    name: receiverName,
    email: receiverEmail,
    subject,
    message,
    adminEmail,
  }: any = req.body; 
  console.log('receiver email: ', receiverEmail)


  const mailOptionsForAdmin = {
    from: process.env.SMTP_SENDER_EMAIL,
    to: adminEmail || 'rahat.cse5.bu@gmail.com',
    subject: "Point Medical Inquiry",
    text: `
    Name: ${receiverName},
    Email: ${receiverEmail},
    Subject: ${subject},
    Message: ${message}
		`,
    html: `
    <div>
    <p>Name: ${receiverName}</p>
    <br />
    <p>Email: ${receiverEmail}</p>
    <br />
    <p>Subject: ${subject}</p>
    <br />
    <p>Message: ${message}</p>
    </div>
    `
  };


  const mailOptionsForUser = {
    from: process.env.SMTP_SENDER_EMAIL,
    to: receiverEmail,
    subject: "Point Medical || Confirmation: Your inquiry has been submitted",
    text: `
    Dear ${receiverName || 'User'},
    Thank you for connecting with us.
    Kindly, be informed that we have received your email, and our team is working to get your inquiry answered.  We will get back to you soon.

    Sincerely,
    ----
    Point Medical Team.
		`,
    html: `
    <div>
    <p>Dear ${receiverName || 'User'},</p>
    <br />
    <p>Kindly, be informed that we have received your email, and our team is working to get your inquiry answered.  We will get back to you soon.</p>
    <br />
    <p>Sincerely,</p>
    <br />
    <p>Point Medical Team.</p>
    </div>
    `
  };


  // console.log("mailOptions: ", mailOptions);

  try {
    const _res = await transporter.sendMail(mailOptionsForAdmin);
    console.log("Admin Email sent response: ", _res?.response);
    const _res2 = await transporter.sendMail(mailOptionsForUser);
    console.log("User Email sent response: ", _res2?.response);
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