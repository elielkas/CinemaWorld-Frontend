<?php
// BackEnd/getUserInfo.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email']) || !isset($data['role'])) {
    echo json_encode(["success" => false, "message" => "Email ou rôle manquant"]);
    exit;
}

$email = $data['email'];
$role = $data['role'];

try {
    $pdo = new PDO("mysql:host=localhost;dbname=bddcinemaworld;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $table = $role === "admin" ? "administrateur" : "utilisateurs";
    $stmt = $pdo->prepare("SELECT id, nom, email, photo, mdp FROM $table WHERE email = :email");

    $stmt->bindParam(':email', $email);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        echo json_encode(["success" => true, "user" => $user]);
    } else {
        echo json_encode(["success" => false, "message" => "Utilisateur non trouvé"]);
    }

} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Erreur base de données"]);
}
?>
