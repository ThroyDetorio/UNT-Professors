const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

// Load server's certificate and key
const serverOptions = {
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('server-cert.pem'),
    ca: fs.readFileSync('ca-cert.pem'),  // Trusted CA certificate
    requestCert: true,                    // Ask for client certificate
    rejectUnauthorized: true              // Reject clients without a valid certificate
};

// Middleware to parse JSON request bodies
app.use(express.json());

// Client certificate authentication middleware
app.use((req, res, next) => {
    const cert = req.connection.getPeerCertificate();

    if (req.client.authorized) {
        console.log('Client Certificate:', cert.subject);
        next(); // Proceed if client is authenticated
    } else {
        res.status(401).send('Client certificate is required or invalid.');
    }
});

// Handle login
app.post('/login', (req, res) => {
    const { username } = req.body;
    const clientCert = req.connection.getPeerCertificate();

    if (clientCert && clientCert.subject) {
        const clientUsername = clientCert.subject.CN; // Common Name as username
        if (clientUsername === username) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } else {
        res.status(400).send('No client certificate found.');
    }
});

// Start the HTTPS server
https.createServer(serverOptions, app).listen(3000, () => {
    console.log('Server running on https://localhost:3000');
});
