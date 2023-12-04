<?php

class Menu {

    private $vista;

    function __construct() {
        $this->vista = 'vista_usuario';
    }

    public function mostrarMenu() {
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}
?>