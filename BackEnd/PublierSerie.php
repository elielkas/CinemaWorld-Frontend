<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

class SeriePublisher {
    private $conn;
    private $imageDir;

    public function __construct() {
        $this->imageDir = __DIR__ . "/Images/";
        $this->connectDB();
    }

    private function connectDB() {
        $this->conn = new mysqli("localhost", "root", "", "bddcinemaworld");
        if ($this->conn->connect_error) {
            throw new Exception("Connexion échouée : " . $this->conn->connect_error);
        }
    }

    public function publier() {
        if (!isset($_POST['nom'], $_POST['categorie'], $_POST['commentaire'])) {
            throw new Exception("Données manquantes.");
        }

        $nom = $this->conn->real_escape_string($_POST['nom']);
        $categorie = $this->conn->real_escape_string($_POST['categorie']);
        $commentaire = $this->conn->real_escape_string($_POST['commentaire']);
        $photoPath = $this->savePhoto();

        $stmt = $this->conn->prepare("INSERT INTO filmetserie (nom, categorie, photo, commentaire, likes) VALUES (?, ?, ?, ?, 0)");
        $stmt->bind_param("ssss", $nom, $categorie, $photoPath, $commentaire);

        if (!$stmt->execute()) {
            throw new Exception("Erreur SQL : " . $stmt->error);
        }

        return ["success" => true];
    }

    private function savePhoto() {
        if (!isset($_FILES['photo']) || $_FILES['photo']['error'] !== 0) {
            return null;
        }

        if (!file_exists($this->imageDir) && !mkdir($this->imageDir, 0777, true)) {
            throw new Exception("Échec de création du dossier Images.");
        }

        $fileName = uniqid() . "_" . basename($_FILES['photo']['name']);
        $filePath = $this->imageDir . $fileName;

        if (!move_uploaded_file($_FILES['photo']['tmp_name'], $filePath)) {
            throw new Exception("Échec du transfert d'image.");
        }

        return "BackEnd/Images/" . $fileName;
    }

    public function __destruct() {
        if ($this->conn) $this->conn->close();
    }
}

try {
    $publisher = new SeriePublisher();
    $result = $publisher->publier();
    echo json_encode($result);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
