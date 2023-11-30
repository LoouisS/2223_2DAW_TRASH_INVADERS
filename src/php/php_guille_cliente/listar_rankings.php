<?php

// Crea la conexion a la base de datos trashinvaders de localhost
$conexion = mysqli_connect("localhost", "root", "", "trashinvaders");

// Comprueba la conexion a la base de datos

if (!$conexion) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    exit;
}

// Realiza la consulta a la base de datos

$consulta = "SELECT * FROM rankins ORDER BY puntuacion DESC LIMIT 5";

$resultado = mysqli_query($conexion, $consulta);

// Comprueba el resultado de la consulta

if (!$resultado) {
    echo "Error: No se pudo realizar la consulta a la base de datos." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    exit;
}

// Crea un array con los datos de la consulta   

$datos = array();

while ($fila = mysqli_fetch_assoc($resultado)) {
    $datos[] = $fila;
}

// Devuelve el array en formato JSON

echo json_encode($datos);


?>