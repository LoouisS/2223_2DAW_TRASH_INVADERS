<?php

class Sesion {
    private $vista;

    public function __construct() {
        $this->vista = 'vista_inicio_sesion';
    }

    public function mostrarInicioSesion() {
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
    
}
?> 