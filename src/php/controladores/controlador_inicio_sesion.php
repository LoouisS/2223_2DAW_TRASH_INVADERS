<?php

require_once getcwd() . '/src/php/modelos/modelo_inicio_sesion.php';

class ControladorInicioSesion {
    private $modelo;

    public function __construct() {
        $this->modelo = new ModeloInicioSesion();
    }

    public function iniciarSesion() {
        // Inicia la sesión si no está iniciada
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        // Verifica si se enviaron datos de inicio de sesión
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Recoge los datos del formulario
            $usuario = $_POST['username'];
            $contrasena = $_POST['password'];

            // Verifica las credenciales en el modelo
            $credencialesCorrectas = $this->modelo->verificarCredenciales($usuario, $contrasena);

            if ($credencialesCorrectas) {
                // Inicia sesión y almacena información del usuario
                $_SESSION['usuario'] = $usuario;

                // Redirige al usuario a la página de inicio
                header('Location: index.php?controlador=Menu&action=mostrarMenu');
                exit();
            } else {
                // Credenciales incorrectas, muestra un mensaje de error
                header('Location: index.php?controlador=CredencialesIncorrectas&action=mostrarCredencialesIncorrectas');
            }
        }
    }
}


?>

