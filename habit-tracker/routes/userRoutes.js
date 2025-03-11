const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Créer un utilisateur
router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

  connection.query(query, [name, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
    res.status(201).json({ id: result.insertId, name, email });
  });
});

module.exports = router;
