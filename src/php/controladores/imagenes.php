<?php

require_once getcwd() . '/src/php/modelos/modelo_imagenes.php';

class ImagenesController {
    
    public $vista;
    public $modelo;

    function __construct() {
        $this->vista = 'vista_imagenes';
        $this->modelo = new ModeloImagenes();
    }

    public function mostrarImagen() {
        $imagenes = $this->modelo->mostrarImagen();
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }

    public function subirImagenes() {
        $this->modelo->agregarImagen($_FILES);
    }

    public function borrarImagen() {
        $this->modelo->eliminarImagen((int)$$_GET['idImagen']);
    }

    public function confirmarBorrado() {
        $imagen = $this->modelo->mostrarImagenPorId((int)$_GET['idImagen']);
        $this->vista = 'confirmar_borrado';
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }

    public function ejecucionBorrado() {
        $this->modelo->eliminarImagen($_GET['idImagen']);
        header('Location: index.php?controlador=Imagenes&action=mostrarImagen&borrado=BorradoCorrecto');
    }

    public function confirmaSubida() {
        $this->modelo->agregarImagen($_FILES);
        $this->vista = 'confirmacion_subida';  
        header('Location: index.php?controlador=Imagenes&action=mostrarImagen&subidaCorrecta=Ok');
    }

    public function extensionIncorrecta() {
        $imagenes = $this->modelo->mostrarImagen();
        $this->vista = 'extension_incorrecta';
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}

?>