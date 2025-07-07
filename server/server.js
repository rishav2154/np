const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rishav@1122',
  database: 'npt'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database successfully!');
});

// Create tables if they don't exist
const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    export_number VARCHAR(100),
    import_number VARCHAR(100),
    user_type ENUM('importer', 'exporter', 'both') DEFAULT 'both',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

const createContactTable = `
  CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    service VARCHAR(100),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

// Initialize tables
db.query(createUsersTable, (err) => {
  if (err) {
    console.error('Error creating users table:', err);
  } else {
    console.log('Users table ready');
  }
});

db.query(createContactTable, (err) => {
  if (err) {
    console.error('Error creating contact_messages table:', err);
  } else {
    console.log('Contact messages table ready');
  }
});

// SIGN UP - Register new user
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, phone, company, exportNumber, importNumber, userType } = req.body;

  // Check if required fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  // Check if user already exists
  db.query('SELECT email FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Hash password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Password hashing error:', err);
        return res.status(500).json({ error: 'Failed to process password' });
      }

      // Insert new user
      const insertQuery = `
        INSERT INTO users (name, email, password, phone, company, export_number, import_number, user_type)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        name,
        email,
        hashedPassword,
        phone || null,
        company || null,
        exportNumber || null,
        importNumber || null,
        userType || 'both'
      ];

      db.query(insertQuery, values, (err, result) => {
        if (err) {
          console.error('Error inserting user:', err);
          return res.status(500).json({ error: 'Failed to create user' });
        }

        // Return success with user data (without password)
        const userData = {
          id: result.insertId,
          name,
          email,
          phone: phone || '',
          company: company || '',
          exportNumber: exportNumber || '',
          importNumber: importNumber || '',
          userType: userType || 'both'
        };

        res.status(201).json({
          message: 'User registered successfully',
          user: userData
        });
      });
    });
  });
});

// SIGN IN - Login user
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Check if required fields are provided
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Find user by email
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Password comparison error:', err);
        return res.status(500).json({ error: 'Authentication failed' });
      }

      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Return success with user data (without password)
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        company: user.company || '',
        exportNumber: user.export_number || '',
        importNumber: user.import_number || '',
        userType: user.user_type
      };

      res.json({
        message: 'Login successful',
        user: userData
      });
    });
  });
});

// CONTACT FORM - Submit message
app.post('/api/contact/submit', (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  // Check if required fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Insert contact message
  const insertQuery = `
    INSERT INTO contact_messages (name, email, phone, company, service, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [
    name,
    email,
    phone || null,
    company || null,
    service || null,
    message
  ];

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting contact message:', err);
      return res.status(500).json({ error: 'Failed to submit message' });
    }

    res.status(201).json({
      message: 'Message submitted successfully',
      id: result.insertId
    });
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Neosankalp API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;