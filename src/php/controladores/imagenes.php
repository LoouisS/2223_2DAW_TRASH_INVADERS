<?php

class Imagenes {
    
    public $vista;
    public $modelo;

    function __construct() {
        $this->vista = 'mostrar_imagenes';
        $this->modelo = new ModeloImagenes();
    }

}

?>