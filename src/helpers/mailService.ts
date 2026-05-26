import nodemailer from "nodemailer";
import config from "./processEnv";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: config.MAIL_USER,
    pass: config.MAIL_PASS,
  },
});

const otpMailSender = async ({
  email,
  subject,
  template,
}: {
  email: string;
  subject: string;
  template: string;
}) => {
  try {
    await transporter.sendMail({
      from: '"GoCommerce" <team@goCommerce.com>', // sender address
      to: email, // list of recipients
      subject: subject, // subject line
      html: template, // HTML body
    });
  } catch (error) {
    console.log("Error while sending mail", error);
  }
};

export const OTPMailSender = otpMailSender;
