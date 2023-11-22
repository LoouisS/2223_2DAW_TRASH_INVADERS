<?php

require_once 'src/php/modelos/modelo_imagenes.php';

class Imagenes {
    
    public $vista;
    public $modelo;

    function __construct() {
        $this->vista = 'vista_imagenes';
        $this->modelo = new ModeloImagenes();
        $this->mostrarImagen();
    }

    public function mostrarImagen() {
        $imagenes = $this->modelo->mostrarImagen();
        echo $imagenes;
        require_once 'src/php/vistas/' . $this->vista . '.php';
    }

}

?>