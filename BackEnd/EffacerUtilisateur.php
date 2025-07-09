<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

class UserDeleter {
    private $pdo;

    public function __construct() {
        $this->pdo = new PDO("mysql:host=localhost;dbname=bddcinemaworld;charset=utf8", "root", "");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function deleteByEmail($email) {
        $stmt = $this->pdo->prepare("DELETE FROM utilisateurs WHERE email = :email");
        $stmt->bindParam(':email', $email);

        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Échec de la suppression."]);
        }
    }
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email'])) {
    echo json_encode(["success" => false, "message" => "Email manquant."]);
    exit;
}

try {
    $deleter = new UserDeleter();
    $deleter->deleteByEmail($data['email']);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Erreur serveur : " . $e->getMessage()]);
}
