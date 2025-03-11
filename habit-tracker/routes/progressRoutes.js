const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Enregistrer un progrès pour une habitude
router.post('/', (req, res) => {
  const { habit_id, completed, date } = req.body;
  const query = 'INSERT INTO progress (habit_id, completed, date) VALUES (?, ?, ?)';

  connection.query(query, [habit_id, completed, date], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de l\'enregistrement du progrès' });
    }
    res.status(201).json({ id: result.insertId, habit_id, completed, date });
  });
});

module.exports = router;
