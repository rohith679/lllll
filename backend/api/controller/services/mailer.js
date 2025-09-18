require("dotenv").config();
const nodemailer = require("nodemailer");

// Load environment variables (fallbacks included)
const SMTP_USER =
  process.env.SMTP_MAIL ||
  process.env.GMAIL_USER ||
  "fathimaclinic1234@gmail.com";

const RAW_SMTP_PASS =
  process.env.SMTP_PASS ||
  process.env.GMAIL_APP_PASSWORD ||
  process.env.GMAIL_PASS ||
  "";

const SMTP_PASS = RAW_SMTP_PASS.replace(/\s+/g, ""); // remove spaces from Gmail app password

if (process.env.MAIL_DEBUG === '1') {
  console.log("Mailer env → user set:", !!SMTP_USER, "passLen:", SMTP_PASS.length);
}

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // 465 if you want SSL
  secure: false, // true for 465, false for 587
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  logger: process.env.MAIL_DEBUG === '1', // logs SMTP traffic (disable in prod if too noisy)
  debug: process.env.MAIL_DEBUG === '1',
});

// Optional verify in development only
if (process.env.NODE_ENV !== "production") {
  transporter
    .verify()
    .then(() => console.log("Mailer ready using:", SMTP_USER))
    .catch((err) => console.warn("Mailer verification failed:", err?.message));
}

// Helper function to send mail
async function sendMail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: `"Fathima Clinic" <${SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Mail send failed:", err.message);
    throw err;
  }
}

module.exports = { transporter, sendMail, SENDER_EMAIL: SMTP_USER };
