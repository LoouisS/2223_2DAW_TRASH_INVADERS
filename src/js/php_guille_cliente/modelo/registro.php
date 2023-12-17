<?php

require_once getcwd() . '/../../../php/config/config.php';


class ModeloParametrosJuego{

    private $conexion;

    function __construct() {
        $this->conexion = $this->conexion();
    }

    public function conexion() {
        $this->conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);
        $this->conexion->set_charset('utf8');

        return $this->conexion;
    }

    public function comprobarUsuario() {
        // SQL Statement to check if the user exists
        $stmt = $this->conexion->prepare("SELECT * FROM usuarios WHERE nickname = ?");
        $stmt->bind_param('s', $_POST['nombre_usuario']);
        $stmt->execute();
        $stmt->store_result();
        
    }

    public function registrarUsuario() {

    }


}

?>