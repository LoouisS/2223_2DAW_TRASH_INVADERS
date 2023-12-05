<?php

require_once getcwd() . '/src/php/modelos/modelo_imagenes.php';

class ControladorImagenesUsuario {
    
    public $vista;
    public $modelo;

    function __construct() {
        $this->vista = 'vista_seleccionar_imagen';
        $this->modelo = new ModeloImagenes();
    }

    public function mostrarImagenUsuario() {
        $imagenes = $this->modelo->mostrarImagen();
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}

?>