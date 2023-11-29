
<?php

define("HOST", "localhost");
define("DATABASE", "trashinvaders");
define("USER", "root");
define("PASSWORD", "");

// Crea una conexion a la base de datos

$conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);

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