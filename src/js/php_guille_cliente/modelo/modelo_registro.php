<?php

class ModeloRegistro{

    private $conexion;

    function __construct() {
        $this->conexion = $this->conexion();
    }

    public function conexion() {
        $this->conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);
        $this->conexion->set_charset('utf8');

        return $this->conexion;
    }

    public function registrarUsuario($usuario, $contrasena) {
        // SQL Statement to register the user
        $stmt = $this->conexion->prepare("INSERT INTO usuario (nickname, contrasenia) VALUES (?, ?)");
        $stmt->bind_param('ss', $usuario, $contrasena);
        $stmt->execute();
        $stmt->store_result();
        $stmt->close();
    }

    public function comprobarUsuario($usuario, $contrasena) {
        // SQL Statement to check if the user exists
        $stmt = $this->conexion->prepare("SELECT * FROM usuario WHERE nickname = ? AND contrasenia = ?");
        $stmt->bind_param('ss', $usuario, $contrasena);
        $stmt->execute();
        $stmt->store_result();
        $num_of_rows = $stmt->num_rows;
        $stmt->close();

        return $num_of_rows;

    }


}

?>