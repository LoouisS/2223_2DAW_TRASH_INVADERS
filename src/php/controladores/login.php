<?php
// Controlador

require_once 'modelo.php';
require_once 'vista.php';

class Controlador {
    private $modelo;
    private $vista;

    public function __construct($modelo, $vista) {
        $this->modelo = $modelo;
        $this->vista = $vista;
    }

    public function iniciarSesion($usuario, $contrasena) {
        $usuarioValido = $this->modelo->validarUsuario($usuario, $contrasena);

        if ($usuarioValido) {
            $this->vista->mostrarMensaje("Inicio de sesión exitoso");
        } else {
            $this->vista->mostrarMensaje("Credenciales incorrectas");
        }
    }
}

$controlador = new Controlador($modelo, $vista);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'] ?? '';
    $contrasena = $_POST['contrasena'] ?? '';

    $controlador->iniciarSesion($usuario, $contrasena);
}
?>