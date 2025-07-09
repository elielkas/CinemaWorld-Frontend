<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "bddcinemaworld");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, nom, photo, likes FROM filmetserie ORDER BY id DESC LIMIT 4";
$result = $conn->query($sql);

$films = [];

while ($row = $result->fetch_assoc()) {
    $films[] = $row;
}

echo json_encode($films);
$conn->close();
?>
