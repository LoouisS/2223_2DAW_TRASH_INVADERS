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
        header("Location: index.php");
    }

    public function borrarImagen($imagen) {
        $this->modelo->eliminarImagen((int)$imagen);
        header("Location: index.php");
    }

}

?>