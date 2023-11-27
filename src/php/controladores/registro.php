<?php
require_once '../modelos/modelo_registro.php';
require_once '../vistas/vista_registro.php';

class ControladorRegistro {
    private $modelo;

    public function __construct($modelo) {
        $this->modelo = $modelo;
    }

    public function procesarRegistro($datosRegistro) {
        var_dump($_POST);
        
        $nombre = $datosRegistro['nombre'] ?? '';
        $contrasenia = $datosRegistro['contrasenia'] ?? '';

        if (!empty($nombre) && !empty($contrasenia)) {
            $exito = $this->modelo->registrarUsuario($nombre, $contrasenia);

            if ($exito) {
                // Redireccionar a una página de éxito
                header('Location: path/al/exito.html');
                exit();
            } else {
                // Redireccionar a una página de error
                header('Location: path/al/error.html?error=RegistroFallido');
                exit();
            }
        } else {
            // Redireccionar a una página de error por campos obligatorios
            header('Location: path/al/error_campos_obligatorios.html?error=CamposObligatorios');
            exit();
        }
    }
}
?>


