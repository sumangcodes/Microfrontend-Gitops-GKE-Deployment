const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;
let isReady = false;

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

// Liveness probe
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Readiness probe
app.get('/ready', (req, res) => {
  if (isReady) {
    res.status(200).json({ status: 'READY' });
  } else {
    res.status(503).json({ status: 'NOT_READY' });
  }
});

// Simulate readiness state for demo purposes
setTimeout(() => {
  isReady = true;
  console.log('App is now ready');
}, 3000);

// Handle all other routes to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://${getServerIPAddress()}:${PORT}`);
});

// Function to get the server's IP address
const os = require('os');
const getServerIPAddress = () => {
  const interfaces = os.networkInterfaces();
  for (let name of Object.keys(interfaces)) {
    for (let net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
};