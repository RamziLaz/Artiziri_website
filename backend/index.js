// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;
const dburi =
  "mongodb+srv://lazouniramzi:sastanaqqam_artiziri@artiziri.yxsuwn5.mongodb.net/?retryWrites=true&w=majority&appName=Artiziri";
const nodemailer = require("nodemailer"); // Import Nodemailer

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "lazouniramzi@gmail.com", // your email
    pass: "vpmp kwgm pzui gevi", // your password
  },
});

// Function to send confirmation email
async function sendConfirmationEmail(email) {
  // Define email content
  let mailOptions = {
    from: "lazouniramzi@gmail.com",
    to: email,
    subject: "Newsletter Subscription",
    html: "<p> We're thrilled to welcome you to the Artiziri community As an aficionado of creativity and innovation, you've joined a vibrant community dedicated to celebrating the arts in all their forms. <br>At Artiziri, we're passionate about fostering connections and sharing inspiration. Our newsletter is your ticket to a world of artistic wonders, where you'll discover: <br> 🖌️Exciting updates on the latest trends in art and design.<br>🎭 Exclusive interviews with talented artists pushing boundaries.<br>🎨 Creative tips and techniques to unleash your inner artist.<br>📸 Stunning visual showcases from around the globe.<br> Thank you for choosing Artiziri as your creative companion. We can't wait to embark on this artistic adventure together! </p>",
  };

  // Send email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}

// Define a schema for the emails
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Email = mongoose.model("Email", emailSchema);

// Route to handle email submissions
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
      res.status(500).send("Error saving email");
    }
  }
});

app.listen(port, "0.0.0.0",() => {
  console.log(`Server is running on port ${port}`);
});
// // sastanaqqam_artiziri mpdformoonogodb
// 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 =/token 
