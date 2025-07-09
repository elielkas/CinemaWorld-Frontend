<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

$conn = new mysqli("localhost", "root", "", "bddcinemaworld");

$data = json_decode(file_get_contents("php://input"), true);

$id = intval($data['id']);
$action = $data['action']; // 'like' or 'unlike'

if ($action === 'like') {
    $sql = "UPDATE filmetserie SET likes = likes + 1 WHERE id = $id";
} elseif ($action === 'unlike') {
    $sql = "UPDATE filmetserie SET likes = likes - 1 WHERE id = $id AND likes > 0";
} else {
    echo json_encode(["success" => false]);
    exit();
}

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

$conn->close();
?>
