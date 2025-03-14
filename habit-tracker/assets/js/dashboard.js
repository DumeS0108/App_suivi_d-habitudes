document.addEventListener("DOMContentLoaded", async () => {
    const ctx = document.getElementById("habitChart").getContext("2d");

    try {
        const response = await fetch("../backend/get_habits.php");
        const data = await response.json();

        if (data.error) {
            console.error(data.error);
            return;
        }

        // Extraire les noms et progressions des habitudes
        const labels = data.map(habit => habit.name);
        const progressData = data.map(habit => habit.progress);

        // Création du graphique
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Progression des habitudes",
                    data: progressData,
                    backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"]
                }]
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
            }
        });

    } catch (error) {
        console.error("Erreur lors du chargement des données", error);
    }
});
