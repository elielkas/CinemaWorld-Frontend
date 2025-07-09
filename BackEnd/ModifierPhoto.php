<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

try {
    if (!isset($_POST['email'], $_POST['role'])) {
        throw new Exception("Paramètres manquants.");
    }

    $email = $_POST['email'];
    $role = $_POST['role'];
    $table = $role === "admin" ? "administrateur" : "utilisateurs";

    if (!isset($_FILES['photo']) || $_FILES['photo']['error'] !== 0) {
        throw new Exception("Aucun fichier reçu.");
    }

    $uploadDir = __DIR__ . "/uploads/";
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $fileName = uniqid() . "_" . basename($_FILES['photo']['name']);
    $filePath = $uploadDir . $fileName;

    if (!move_uploaded_file($_FILES['photo']['tmp_name'], $filePath)) {
        throw new Exception("Échec du téléchargement.");
    }

    $photoPath = "BackEnd/uploads/" . $fileName;

    $pdo = new PDO("mysql:host=localhost;dbname=bddcinemaworld;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("UPDATE $table SET photo = :photo WHERE email = :email");
    $stmt->bindParam(':photo', $photoPath);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    echo json_encode(["success" => true, "photoPath" => $photoPath]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
