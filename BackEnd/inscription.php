<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    exit(0);
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

class UserRegistration {
    private $conn;
    private $uploadDir;

    public function __construct() {
        $this->uploadDir = __DIR__ . "/uploads/";
        $this->connectDB();
    }

    private function connectDB() {
        $host = 'localhost';
        $dbname = 'bddcinemaworld';
        $user = 'root';
        $pass = '';

        $this->conn = new mysqli($host, $user, $pass, $dbname);

        if ($this->conn->connect_error) {
            throw new Exception("Erreur de connexion à la base de données : " . $this->conn->connect_error);
        }
    }

    public function register() {
        if (!isset($_POST['nom'], $_POST['email'], $_POST['mdp'])) {
            throw new Exception("Champs obligatoires manquants.");
        }

        $nom = $_POST['nom'];
        $email = $_POST['email'];
        $mdp = password_hash($_POST['mdp'], PASSWORD_BCRYPT);
        $photoPath = $this->savePhoto();

        $stmt = $this->conn->prepare("INSERT INTO utilisateurs (nom, email, mdp, photo) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $nom, $email, $mdp, $photoPath);

        if (!$stmt->execute()) {
            throw new Exception("Erreur SQL : " . $stmt->error);
        }

        $stmt->close();
        return ["success" => true];
    }

    private function savePhoto() {
        if (!isset($_FILES['photo']) || $_FILES['photo']['error'] !== 0) {
            return null;
        }

        if (!file_exists($this->uploadDir) && !mkdir($this->uploadDir, 0777, true)) {
            throw new Exception("Impossible de créer le dossier 'uploads'.");
        }

        if (!is_writable($this->uploadDir)) {
            throw new Exception("Le dossier 'uploads' n'est pas accessible en écriture.");
        }

        $fileName = uniqid() . "_" . basename($_FILES['photo']['name']);
        $filePath = $this->uploadDir . $fileName;

        if (!move_uploaded_file($_FILES['photo']['tmp_name'], $filePath)) {
            throw new Exception("Échec du téléchargement de l'image.");
        }

        return "BackEnd/uploads/" . $fileName;
    }

    public function __destruct() {
        if ($this->conn) {
            $this->conn->close();
        }
    }
}

// Exécution
try {
    $inscription = new UserRegistration();
    $result = $inscription->register();
    echo json_encode($result);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
