const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

// Créer une application Express
const app = express();

// Middleware
app.use(express.json()); // Pour parser le corps des requêtes en JSON
app.use(cors()); // Permet les requêtes entre serveurs différents

// Importer les routes
const userRoutes = require('./routes/userRoutes');
const habitRoutes = require('./routes/habitRoutes');
const progressRoutes = require('./routes/progressRoutes');

// Utiliser les routes
app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/progress', progressRoutes);

// Lancer le serveur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
