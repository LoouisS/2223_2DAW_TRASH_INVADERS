<?php

class AdministradorController {

    public $vista;
    // Modelo no sera necesario

    function __construct() {
        $this->vista = 'vista_admin'; 
    }

    public function mostrarAdmin() {
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}
?>