<?php

// Conecta a trashinvaders localmente

$servername = "18.2daw.esvirgua.com";
$username = "user2daw_18";
$password = "B8ML(10P{v11";
$dbname = "user2daw_BD2-18";

// Crea la conexion a la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

// Chequea la conexion

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Recibe el id de la mejora a borrar por la URL

$id = $_GET['idRanking'];

// Borra la mejora de la base de datos

$sql = "DELETE FROM rankings WHERE idRanking = $id";

// Devuelve una respuesta encodeada en JSON

if ($conn->query($sql) === TRUE) {
    $response = array("status" => "success");
    echo json_encode($response);
} else {
    $response = array("status" => "error");
    echo json_encode($response);
}


?>