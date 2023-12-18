<?php

require_once getcwd() .  '/modelo/modelo_parametros_juego.php';

class ParametrosJuego {

    public $modelo;

    function __construct() {
        $this->modelo = new ModeloParametrosJuego();
    }

    public function obtenerParametrosJuego() {
        $parametros = $this->modelo->obtenerParametrosJuego();
        return $parametros;
    }   

}   


?>