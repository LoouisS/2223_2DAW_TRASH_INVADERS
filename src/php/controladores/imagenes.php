<?php

require_once 'src/php/modelos/modelo_imagenes.php';

class Imagenes {
    
    public $vista;
    public $modelo;

    function __construct() {
        $this->vista = 'vista_imagenes';
        $this->modelo = new ModeloImagenes();
    }

    public function mostrarImagen() {
        $imagenes = $this->modelo->mostrarImagen();
        require_once 'src/php/vistas/' . $this->vista . '.php';
    }

    public function subirImagenes() {
        $this->modelo->agregarImagen($_FILES);
    }

    public function borrarImagen() {
        $this->modelo->eliminarImagen((int)$$_GET['idImagen']);
    }

    public function confirmarBorrado() {
        $this->modelo->mostrarImagenPorId((int)$_GET['idImagen']);
        $this->vista = 'confirmar_borrado';
    }

    public function ejecucionBorrado() {
        $this->modelo->eliminarImagen($_GET['idImagen']);
        $this->vista = 'borrado_exitoso';
    }

    public function confirmaSubida() {
        $this->modelo->agregarImagen($_FILES);
        $this->vista = 'confirmacion_subida';  
    }
}

?>