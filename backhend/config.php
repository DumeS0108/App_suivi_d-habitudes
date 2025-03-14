<?php
$host = "192.168.65.219";  // Serveur MySQL
$dbname = "habit_tracker"; // Nom de la base
$username = "habit-tracker";  // À modifier si besoin
$password = "Cn-t]A-GN8DQ2*@E";  // À modifier si besoin

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>
