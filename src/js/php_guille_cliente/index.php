<?php

require_once getcwd() .  '/controlador/parametros_juego.php';

if ($_GET['controlador'] === 'ParametrosJuego' && $_GET['action'] === 'obtenerParametrosJuego') {
    $controlador = new ParametrosJuego();
    $parametros = $controlador->obtenerParametrosJuego();
    echo $parametros;
}


?>
