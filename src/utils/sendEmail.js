import nodemailer from "nodemailer";

const sendEmail = async ({
  from = '"abdo👻" <abdobeendari@gmail.com>',
  to,
  subject = "cheak assignment9",
  html,
} = {}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "abdobeendari@gmail.com",
      pass: "uyxplzfnbxuzlrpz",
    },
  });

  const info = await transporter.sendMail({
    from, 
    to,
    subject, 
    html,
  });
};

export default sendEmail