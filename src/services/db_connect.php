<?php
// Database credentials
$hostname = "localhost"; // Change this to your database host
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$database = "employee_management"; // Change this to your database name

// Create a connection
$mysqli = new mysqli($hostname, $username, $password, $database);

// Check the connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Set the character set to UTF-8 (if needed)
if (!$mysqli->set_charset("utf8")) {
    die("Error loading character set utf8: " . $mysqli->error);
}

// Optional: You can check if the connection was successful
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}

// The $mysqli variable is now ready to be used for database operations.

// Close the connection when done (this can be done at the end of your PHP scripts)

?>
