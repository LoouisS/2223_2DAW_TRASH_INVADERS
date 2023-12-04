<?php

class Usuario {

    public $vista;
    // Modelo no sera necesario

    function __construct() {
        $this->vista = 'vista_inicio'; 
    }

    public function mostrarInicio() {
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}
?>