<?php

require_once getcwd() .  '..\modelo\modelo_parametros_juego.php';

class ParametrosJuego {

    public $modelo;

    function __construct() {
        $this->modelo = new ModeloParametrosJuego();
    }

    public function obtenerParametrosJuego() {
        $parametros = $this->modelo->obtenerParametrosJuego();
        // I want to return the parameters as a JSON string 
        // so that I can use it in my JavaScript code
        return $parametros;
    }   

}   


?>