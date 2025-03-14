const mysql = require('mysql2');

// Créer une connexion à la base de données
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  

// Tester la connexion
connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à MySQL:', err);
  } else {
    console.log('Connexion réussie à MySQL');
  }
});

module.exports = connection;
