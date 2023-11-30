<?php

// Conectamos con la base de datos trashinvaders de localhost

$conexion = mysqli_connect("localhost", "root", "", "trashinvaders");

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
    $sql = "INSERT INTO rankins (idUsuario, puntuacion) VALUES ('$idUsuario', $puntuacion)";

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

    $sql = "INSERT INTO rankins (idUsuario, puntuacion) VALUES (?, ?)";

    // Preparar la consulta SQL para su ejecución

    $stmt = mysqli_prepare($conexion, $sql);

    // Vincular los parámetros a la sentencia preparada como parámetros
    // Cambiar "ii" a "si" para reflejar que idUsuario es varchar y puntuacion es un int
    mysqli_stmt_bind_param($stmt, "si", $idUsuario, $puntuacion);

    // Intentar ejecutar la sentencia preparada

    if (mysqli_stmt_execute($stmt)) {
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
