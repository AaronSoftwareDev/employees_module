<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json"); // Set the Content-Type header to JSON

// Include the database connection script
include 'db_connect.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Your user authentication logic goes here
    // You can use the $mysqli variable to perform database queries

    // Example query to check if a user exists
    $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $mysqli->query($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $_SESSION['account_type'] = $row['account_type']; 
        // User authenticated
        echo json_encode(["message" => "authenticated", "account_type" => $_SESSION['account_type']]);
    } else {
        // User authentication failed
        echo json_encode(["message" => "User authentication failed"]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Handle GET request to retrieve account_type
    if (isset($_SESSION['account_type'])) {
        echo json_encode(["account_type" => $_SESSION['account_type']]);
    } else {
        echo json_encode(["error" => "Account type not found"]);
    }
} else {
    echo json_encode(["error" => "Invalid request method"]);
}

// Close the database connection when done
$mysqli->close();
?>
