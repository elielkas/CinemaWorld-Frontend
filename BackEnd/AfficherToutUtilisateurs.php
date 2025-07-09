<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

class UserFetcher {
    private $pdo;

    public function __construct() {
        $this->pdo = new PDO("mysql:host=localhost;dbname=bddcinemaworld;charset=utf8", "root", "");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function getAllUsers() {
        $stmt = $this->pdo->prepare("SELECT nom, email FROM utilisateurs");
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(["success" => true, "users" => $users]);
    }
}

try {
    $fetcher = new UserFetcher();
    $fetcher->getAllUsers();
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Erreur serveur : " . $e->getMessage()]);
}
