// index.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',  
  database: 'contact_book_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});


// Get all contacts
app.get('/contacts', (req, res) => {
  db.query('SELECT * FROM contacts', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get single contact by id
app.get('/contacts/:id', (req, res) => {
  db.query('SELECT * FROM contacts WHERE contact_id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
  app.get('/', (req, res) => {
    res.send('Welcome to the Contact Book API. Use /contacts endpoint.');
  });
  
});

// Create new contact
app.post('/contacts', (req, res) => {
  const { first_name, last_name, email, phone, group_id } = req.body;
  const sql = 'INSERT INTO contacts (first_name, last_name, email, phone, group_id) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [first_name, last_name, email, phone, group_id], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
});

// Update contact
app.put('/contacts/:id', (req, res) => {
  const { first_name, last_name, email, phone, group_id } = req.body;
  const sql = 'UPDATE contacts SET first_name=?, last_name=?, email=?, phone=?, group_id=? WHERE contact_id=?';
  db.query(sql, [first_name, last_name, email, phone, group_id, req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Contact updated.' });
  });
});

// Delete contact
app.delete('/contacts/:id', (req, res) => {
  db.query('DELETE FROM contacts WHERE contact_id=?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Contact deleted.' });
  });
});

// Start server
app.listen(8080, () => {
  console.log('API server is running on http://localhost:8080');
});
