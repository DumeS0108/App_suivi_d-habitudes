const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Créer une habitude
router.post('/', (req, res) => {
  const { name, frequency, user_id } = req.body;
  const query = 'INSERT INTO habits (name, frequency, user_id) VALUES (?, ?, ?)';

  connection.query(query, [name, frequency, user_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la création de l\'habitude' });
    }
    res.status(201).json({ id: result.insertId, name, frequency, user_id });
  });
});

// Obtenir toutes les habitudes d'un utilisateur
router.get('/:user_id', (req, res) => {
  const { user_id } = req.params;
  const query = 'SELECT * FROM habits WHERE user_id = ?';

  connection.query(query, [user_id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la récupération des habitudes' });
    }
    res.json(results);
  });
});

module.exports = router;
