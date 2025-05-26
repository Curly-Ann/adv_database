require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { serverConfig } = require('./config');
const { testConnection } = require('./db');

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const medicineRoutes = require('./routes/medicines');
const reminderRoutes = require('./routes/reminders');
const reportRoutes = require('./routes/reports');
const vaultRoutes = require('./routes/vaults');

const path = require('path');

// Serve React static files
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all handler for client-side routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Uncomment intakeRoutes
const intakeRoutes = require('./routes/intakeRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Add request logging middleware
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  console.log('Request Body:', req.body);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/vaults', vaultRoutes);
// Uncomment intakeRoutes
app.use('/api/intake', intakeRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('ReMed API is running');
});

// Start server
const PORT = serverConfig.port;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  // Test database connection
  await testConnection();
});

module.exports = app; 