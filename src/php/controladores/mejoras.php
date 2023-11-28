<?php

class Mejoras {

    public $vista;
    // Modelo no sera necesario

    function __construct() {
        $this->vista = 'vista_mejoras'; 
    }

    public function mostrarMejora() {
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}
?>