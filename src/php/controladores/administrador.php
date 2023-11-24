<?php

class Administrador {

    public $vista;
    // Modelo no sera necesario

    function __construct() {
        $this->vista = 'vista_admin'; 
    }

    public function mostrarAdmin() {
        require_once 'src/php/vistas/' . $this->vista . '.php';
    }
}
?>