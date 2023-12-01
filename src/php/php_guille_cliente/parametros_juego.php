<?php 

$servername = "18.2daw.esvirgua.com";
$username = "user2daw_18";
$password = "B8ML(10P{v11";
$dbname = "user2daw_BD2-18";

// Crea una conexion a la base de datos local

$conexion = mysqli_connect($servername, $username, $password, $dbname);

// Comprueba la conexion

if (!$conexion) {
    die("Connection failed: " . mysqli_connect_error());
}

// Trae todos los datos de la tabla de parametros

$sql = "SELECT prob_aparicion_mejora FROM parametros";

$result = mysqli_query($conexion, $sql);

// Si hay resultados, los devuelve en un array

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    
    // Encodea el resultado a json
    echo json_encode($row);
} else {
    echo "0 results";
}


?>
