import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // Create reusable transporter object using your email provider settings
  let transporter = nodemailer.createTransport({
    service: "gmail", // e.g. Gmail, or use SMTP details
    auth: {
      user: process.env.EMAIL_USER, // your email from .env.local
      pass: process.env.EMAIL_PASS, // your app password or email password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: process.env.EMAIL_USER, // your email to receive
      subject: `New contact form message from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
}
