const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const helmet = require("helmet");
require("dotenv").config();
const { celebrate, Joi, errors, Segments } = require("celebrate");

const app = express();
const port = process.env.PORT || 5000;
const dburi = process.env.MONGODB_URI;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Connect to MongoDB
mongoose
  .connect(dburi, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Define schemas and models
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send confirmation email
async function sendConfirmationEmail(email) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Newsletter Subscription",
    html: `<p>We're thrilled to welcome you to the Artiziri community...</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}

// Route to handle contact form submissions
app.post(
  "/api/contact",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      subject: Joi.string().required(),
      message: Joi.string().required(),
    }),
  }),
  async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
      const newContact = new Contact({ name, email, subject, message });
      await newContact.save();
      res.status(201).send("Contact form submitted successfully");
    } catch (error) {
      res.status(500).send("Error saving contact form data: " + error.message);
    }
  }
);

// Global error handler
app.use(errors());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Define a schema for the emails
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
});

const Email = mongoose.model("Email", emailSchema);

// Route to handle email subscriptions
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const newEmail = new Email({ email });
    await newEmail.save();

    // Send confirmation email
    await sendConfirmationEmail(email);
    res.status(201).send("Email saved successfully");
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send("Email already exists");
    } else {
      res.status(500).send("Error saving email: " + error.message);
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
