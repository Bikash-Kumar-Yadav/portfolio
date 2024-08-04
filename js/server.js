// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // POST endpoint for handling contact form submissions
// app.post('/api/contact', (req, res) => {
//     const { name, email, phone, subject, message } = req.body;

//     // Validate incoming data (basic validation, adjust as needed)
//     if (!name || !email || !phone || !subject || !message) {
//         return res.status(400).json({ message: 'Please fill in all fields.' });
//     }

//     // Example of email sending using Nodemailer
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com', // Gmail SMTP server hostname
//         port: 587, // Port for secure SMTP (TLS)
//         secure: false, // true for 465, false for other ports; TLS requires secure: true
//         auth: {
//             user: 'ydvbikash081@gmail.com', // Your email address
//             pass: 'bikash@80081' // Your email password or app-specific password
//         },
//     });

//     // Email content
//     const mailOptions = {
//         from: `"${name}" <${email}>`,
//         to: 'ydvbikash081@gmail.com', // Replace with recipient email address
//         subject: subject,
//         text: `${name} (${email}, ${phone}) says: ${message}`,
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
//         }
//         console.log('Message sent:', info.response);
//         return res.status(200).json({ message: 'Message sent successfully!' });
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint for handling contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Validate incoming data (basic validation, adjust as needed)
    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ message: 'Please fill in all fields.' });
    }

    // Example of email sending using Nodemailer
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Gmail SMTP server hostname
        port: 587, // Port for secure SMTP (TLS)
        secure: false, // true for 465, false for other ports; TLS requires secure: true
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS // Your email password or app-specific password
        },
    });

    // Email content
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER, // Replace with recipient email address
        subject: subject,
        text: `${name} (${email}, ${phone}) says: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
        }
        console.log('Message sent:', info.response);
        return res.status(200).json({ message: 'Message sent successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
