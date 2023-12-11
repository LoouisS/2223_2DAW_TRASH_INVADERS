<?php

class ModeloInicioSesion {
    private $conexion;

    function __construct() {
        $this->conexion = $this->conexion();
    }

    public function conexion() {
        $this->conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);
        $this->conexion->set_charset('utf8');

        return $this->conexion;
    }

    public function verificarCredenciales($usuario, $contrasena) {
        // Consulta preparada para obtener la contraseña almacenada en la base de datos
        $stmt = $this->conexion->prepare("SELECT idUsuario, contrasenia FROM usuario WHERE nickname = ?");
        $stmt->bind_param("s", $usuario);
        $stmt->execute();
        $stmt->bind_result($idUsuario, $contrasenaAlmacenada);
        $stmt->fetch();
        $stmt->close();
    
        if ($contrasenaAlmacenada && $contrasenaAlmacenada === $contrasena) {
            // Almacenar el ID del usuario en la sesión
            $_SESSION['idUsuario'] = $idUsuario;
            return true; // Credenciales válidas
        }
    
        return false; // Credenciales inválidas
    }
    
}
?>




