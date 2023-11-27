<?php

class ModeloRegistro {
    private $conexion;
    function __construct() {
        $this->conexion = $this->conexion();
    }

    public function conexion() {
        $this->conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);
        $this->conexion->set_charset('utf8');

        return $this->conexion;
    }

    public function registrarUsuario($nombre, $contrasenia) {
        // Verificar si el usuario ya existe
        $stmt = $this->conexion->prepare("SELECT * FROM usuario WHERE nickname = ?");
        $stmt->bind_param("s", $nombre);
        $stmt->execute();

        if ($stmt->execute()) {
            // Registro exitoso
            echo "Registro exitoso";
            return true;
        } else {
            // Error en el registro
            echo "Error en el registro: " . $stmt->error;
            return false;
        }
        


        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // El usuario ya existe
            return false;
        }

        // Hash de la contraseña antes de almacenarla en la base de datos
        $hashedPassword = password_hash($contrasenia, PASSWORD_DEFAULT);

        // Insertar nuevo usuario
        $stmt = $this->conexion->prepare("INSERT INTO usuario (nickname, contrasenia) VALUES (?, ?)");
        $stmt->bind_param("ss", $nombre, $hashedPassword);

        if ($stmt->execute()) {
            // Registro exitoso
            return true;
        } else {
            // Error en el registro
            return false;
        }
    }

    public function cerrarConexion() {
        $this->conexion->close();
    }
}

?>

