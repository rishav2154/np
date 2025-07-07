const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here';

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
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// AUTHENTICATION ROUTES

// Register endpoint
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, phone, company, exportNumber, importNumber, userType } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({ 
        error: 'Name, email, and password are required' 
      });
    }

    // Check if user already exists
    const checkUserQuery = 'SELECT id FROM users WHERE email = ?';
    db.query(checkUserQuery, [email], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      if (results.length > 0) {
        return res.status(400).json({ error: 'User already exists with this email' });
      }

      try {
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert new user
        const insertUserQuery = `
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

        db.query(insertUserQuery, values, (err, result) => {
          if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ error: 'Failed to create user' });
          }

          // Generate JWT token
          const token = jwt.sign(
            { 
              id: result.insertId, 
              email: email,
              name: name 
            },
            JWT_SECRET,
            { expiresIn: '24h' }
          );

          // Return user data (without password)
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
            token,
            user: userData
          });
        });
      } catch (hashError) {
        console.error('Password hashing error:', hashError);
        res.status(500).json({ error: 'Failed to process password' });
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required' 
      });
    }

    // Find user by email
    const findUserQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(findUserQuery, [email], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const user = results[0];

      try {
        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
          { 
            id: user.id, 
            email: user.email,
            name: user.name 
          },
          JWT_SECRET,
          { expiresIn: '24h' }
        );

        // Return user data (without password)
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
          token,
          user: userData
        });
      } catch (compareError) {
        console.error('Password comparison error:', compareError);
        res.status(500).json({ error: 'Authentication failed' });
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user profile endpoint
app.get('/api/auth/profile', authenticateToken, (req, res) => {
  const getUserQuery = 'SELECT id, name, email, phone, company, export_number, import_number, user_type, created_at FROM users WHERE id = ?';
  
  db.query(getUserQuery, [req.user.id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = results[0];
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || '',
      company: user.company || '',
      exportNumber: user.export_number || '',
      importNumber: user.import_number || '',
      userType: user.user_type,
      joinDate: user.created_at
    };

    res.json({ user: userData });
  });
});

// CONTACT FORM ROUTES

// Submit contact form
app.post('/api/contact/submit', (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }

    // Insert contact message
    const insertContactQuery = `
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

    db.query(insertContactQuery, values, (err, result) => {
      if (err) {
        console.error('Error inserting contact message:', err);
        return res.status(500).json({ error: 'Failed to submit message' });
      }

      res.status(201).json({
        message: 'Message submitted successfully',
        id: result.insertId
      });
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all contact messages (admin endpoint)
app.get('/api/contact/messages', authenticateToken, (req, res) => {
  const getMessagesQuery = 'SELECT * FROM contact_messages ORDER BY created_at DESC';
  
  db.query(getMessagesQuery, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.json({ messages: results });
  });
});

// Update message status (admin endpoint)
app.put('/api/contact/messages/:id/status', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['new', 'read', 'replied'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  const updateStatusQuery = 'UPDATE contact_messages SET status = ? WHERE id = ?';
  
  db.query(updateStatusQuery, [status, id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.json({ message: 'Status updated successfully' });
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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;