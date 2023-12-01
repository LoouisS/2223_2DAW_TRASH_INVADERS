
<?php

$servername = "18.2daw.esvirgua.com";
$username = "user2daw_18";
$password = "B8ML(10P{v11";
$dbname = "user2daw_BD2-18";

// Crea una conexion a la base de datos

$conexion = new mysqli($servername, $username, $password, $dbname);

// Comprueba la conexion

if ($conexion->connect_error) {
    die("Connection failed: " . $conexion->connect_error);
}

// Crea la consulta

$sql = "SELECT * FROM mejora";

// Ejecuta la consulta

$resultado = $conexion->query($sql);

// Comprueba si hay resultados

if ($resultado->num_rows > 0) {
    // Crea un array para guardar los resultados
    $mejoras = array();
    // Guarda los resultados en el array
    while($row = $resultado->fetch_assoc()) {
        $mejoras[] = $row;
    }
    // Devuelve el array
    echo json_encode($mejoras);
} else {
    echo "0 results";
}


?>