<?php

class CredencialesIncorrectas {

    private $vista;

    function __construct() {
        $this->vista = 'vista_credencial_incorrecta';
    }

    public function mostrarCredencialesIncorrectas() {
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}
?>