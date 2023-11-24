<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trashinvaders"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch all the image data
$stmt = $conn->prepare("SELECT imagen FROM imagen");
$stmt->execute();
$stmt->bind_result($imagen);

// Display the fetched images
while ($stmt->fetch()) {
    echo '<img src="data:image/jpeg;base64,' . base64_encode($imagen) . '" alt="Fetched Image">';
}

$stmt->close();
$conn->close();
?>
