
<?php

ini_set("display_errors", "1");

define("HOST", "localhost");
define("DATABASE", "trashinvaders");
define("USER", "root");
define("PASSWORD", "");


// Trae las imagenes de la tabla imagen. Encodea el resultado en JSON.
// Recuerda que las tengo que mostrar desde cliente

$conexion = mysqli_connect(HOST, USER, PASSWORD, DATABASE);

if (mysqli_connect_errno()) {
    echo "Error en la conexión: " . mysqli_connect_error();
}

// Selecciona el campo blob de la imagen

$consulta = "SELECT nombre, imagen FROM imagen";

$resultado = mysqli_query($conexion, $consulta);

if (!$resultado) {
    echo "Error en la consulta: " . mysqli_error($conexion);
}

// Encodea las imagenes en JSON

$imagenes = array();

while ($fila = mysqli_fetch_array($resultado)) {
    $imagenes[] = array(
        'nombre' => $fila['nombre'],
        'imagen' => base64_encode($fila['imagen'])
    );
}

echo json_encode($imagenes);
?>