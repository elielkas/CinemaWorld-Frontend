<?php
// BackEnd/updateUserInfo.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email']) || !isset($data['role']) || !isset($data['field']) || !isset($data['value'])) {
    echo json_encode(["success" => false, "message" => "Données manquantes"]);
    exit;
}

$email = $data['email'];
$role = $data['role'];
$field = $data['field'];
$value = $data['value'];

$allowedFields = ['nom', 'email', 'mdp', 'photo']; // autorise aussi motdepasse et photo
if (!in_array($field, $allowedFields)) {
    echo json_encode(["success" => false, "message" => "Champ non autorisé"]);
    exit;
}

try {
    $pdo = new PDO("mysql:host=localhost;dbname=bddcinemaworld;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $table = $role === "admin" ? "administrateur" : "utilisateurs";

    $stmt = $pdo->prepare("UPDATE $table SET $field = :value WHERE email = :email");
    $stmt->bindParam(':value', $value);
    $stmt->bindParam(':email', $email);

    $stmt->execute();

    echo json_encode(["success" => true, "message" => "Modification réussie"]);

} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Erreur base de données"]);
}
?>
