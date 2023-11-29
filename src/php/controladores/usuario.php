<?php

class Usuario {

    public $vista;
    // Modelo no sera necesario

    function __construct() {
        $this->vista = 'vista_usuario'; 
    }

    public function mostrarUsuario() {
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}
?>