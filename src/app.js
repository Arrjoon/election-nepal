const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/products', require('./routes/product.routes'));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Finder API running 🚀' });
});

module.exports = app;
