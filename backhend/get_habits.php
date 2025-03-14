<?php
header("Content-Type: application/json");
require_once "config.php";

try {
    $stmt = $pdo->query("SELECT name, progress FROM habits");
    $habits = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($habits);
} catch (PDOException $e) {
    echo json_encode(["error" => "Erreur lors de la récupération des habitudes"]);
}
?>
