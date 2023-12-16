<?php

/**
 * Class AdministradorController
 * 
 * This class represents the controller for the administrator functionality.
 */
class AdministradorController {

    /**
     * @var string $vista The name of the view file for the administrator functionality.
     */
    public $vista;

    /**
     * Constructor method for AdministradorController.
     * Initializes the $vista property with the name of the view file.
     */
    function __construct() {
        $this->vista = 'vista_admin'; 
    }

    /**
     * Method to display the administrator view.
     * Requires the corresponding view file.
     */
    public function mostrarAdmin() {
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}
?>