document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    const habitForm = document.getElementById('habit-form');
    const progressForm = document.getElementById('progress-form');
    const messageDiv = document.getElementById('message');
  
    // Créer un utilisateur
    userForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const response = await fetch('http://192.168.65.219:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        showMessage(`Utilisateur créé avec succès ! ID: ${data.id}`);
      } else {
        showMessage('Erreur lors de la création de l\'utilisateur');
      }
    });
  
    // Ajouter une habitude
    habitForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const habitName = document.getElementById('habit-name').value;
      const habitFrequency = document.getElementById('habit-frequency').value;
  
      // Remplace `user_id` par l'ID de l'utilisateur que tu veux
      const userId = 1; // Exemple d'ID d'utilisateur
  
      const response = await fetch('http://192.168.65.219:5000/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: habitName, frequency: habitFrequency, user_id: userId }),
      });
  
      if (response.ok) {
        const data = await response.json();
        showMessage(`Habitude ajoutée avec succès ! ID: ${data.id}`);
      } else {
        showMessage('Erreur lors de l\'ajout de l\'habitude');
      }
    });
  
    // Enregistrer un progrès
    progressForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const habitId = document.getElementById('habit-id').value;
      const completed = document.getElementById('completed').checked;
      const date = document.getElementById('progress-date').value;
  
      const response = await fetch('http://192.168.65.219:5000/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ habit_id: habitId, completed, date }),
      });
  
      if (response.ok) {
        const data = await response.json();
        showMessage(`Progrès enregistré avec succès ! ID: ${data.id}`);
      } else {
        showMessage('Erreur lors de l\'enregistrement du progrès');
      }
    });
  
    // Afficher un message
    function showMessage(message) {
      messageDiv.textContent = message;
    }
  });

  function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.classList.remove('success', 'error', 'info'); // Supprime les anciennes classes
    messageDiv.classList.add(type); // Ajoute la nouvelle classe
  }
  
  