<?php

// Conectamos con la base de datos trashinvaders de localhost

$servername = "18.2daw.esvirgua.com";
$username = "user2daw_18";
$password = "B8ML(10P{v11";
$dbname = "user2daw_BD2-18";

// Creamos la conexión

$conexion = mysqli_connect($servername, $username, $password, $dbname);

// Comprobamos la conexión

if (mysqli_connect_errno()) {
    echo "Fallo al conectar con la base de datos";
    exit();
}

// Recogemos los datos del formulario

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener los datos del formulario
    print_r($_POST);
    $idUsuario = $_POST["idUsuario"];
    $puntuacion = $_POST["puntuacion"];

    // Crear la consulta SQL sin prepararla
    $sql = "INSERT INTO rankings (idUsuario, puntuacion) VALUES ('$idUsuario', $puntuacion)";

    // Intentar ejecutar la consulta SQL

    if (mysqli_query($conexion, $sql)) {
        $id = mysqli_insert_id($conexion);
        // Cerrar la conexión con la base de datos
        mysqli_close($conexion);
        echo json_encode(["mensaje" => "Puntuación agregada correctamente"]);
    } else {
        echo json_encode(["error" => "Algo fue mal. Por favor, vuelve a intentarlo."]);
    }
} else {
    // Devolver una respuesta en caso de que no sea una solicitud POST
    echo json_encode(["error" => "Solicitud no válida"]);
}

?>
