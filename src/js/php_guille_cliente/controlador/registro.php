<?php

require_once getcwd() .  '/modelo/modelo_registro.php';

class Registro{
    public $modelo;

    function __construct() {
        $this->modelo = new ModeloRegistro();
    }

    public function registrarUsuario() {
        $this->modelo->registrarUsuario($_POST['usuario'], $_POST['password']);

    }

    public function comprobarUsuario() {
        $num_of_rows = $this->modelo->comprobarUsuario($_POST['usuario'], $_POST['password']);
        
        $response = array();
        if ($num_of_rows == 1) {
            $response['user_exists'] = true;
        } else {
            $response['user_exists'] = false;
        }
        
        return json_encode($response);
    }
}



?>