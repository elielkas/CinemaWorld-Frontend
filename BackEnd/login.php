<?php
// Affiche les erreurs pour le débogage (à désactiver en production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Entêtes CORS et JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Classe de connexion à la base de données
class Database {
    private $host = 'localhost';
    private $dbname = 'bddcinemaworld';
    private $user = 'root';
    private $password = '';
    private $pdo;

    public function __construct() {
        try {
            $this->pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname;charset=utf8", $this->user, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            $this->sendResponse(false, 'Erreur de connexion à la base de données');
            exit;
        }
    }

    public function getConnection() {
        return $this->pdo;
    }

    private function sendResponse($success, $message) {
        echo json_encode(['success' => $success, 'message' => $message]);
    }
}

// Classe d’authentification
class Auth {
    private $db;
    private $email;
    private $password;

    public function __construct($db) {
        $this->db = $db;
        $this->getInputData();
    }

    private function getInputData() {
        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data['email']) || !isset($data['password'])) {
            $this->sendResponse(false, 'Champs email ou mot de passe manquants');
            exit;
        }

        $this->email = $data['email'];
        $this->password = $data['password'];
    }

    public function login() {
        try {
            // 1. Vérifie dans la table utilisateurs
            $stmt = $this->db->prepare("SELECT * FROM utilisateurs WHERE email = :email");
            $stmt->bindParam(':email', $this->email);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($user && password_verify($this->password, $user['mdp'])) {
                $this->sendResponse(true, 'Connexion réussie', 'utilisateur');
                return;
            }

            // 2. Vérifie dans la table administrateur
            $stmt = $this->db->prepare("SELECT * FROM administrateur WHERE email = :email");
            $stmt->bindParam(':email', $this->email);
            $stmt->execute();
            $admin = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($admin && password_verify($this->password, $admin['mdp'])) {
                $this->sendResponse(true, 'Connexion réussie (admin)', 'admin');
                return;
            }

            // 3. Aucun des deux ne correspond
            $this->sendResponse(false, 'Email ou mot de passe incorrect');

        } catch (PDOException $e) {
            $this->sendResponse(false, 'Erreur lors de la requête SQL');
        }
    }

    private function sendResponse($success, $message, $role = null) {
        echo json_encode([
            'success' => $success,
            'message' => $message,
            'role' => $role
        ]);
    }
}

// Exécution
$db = new Database();
$auth = new Auth($db->getConnection());
$auth->login();
