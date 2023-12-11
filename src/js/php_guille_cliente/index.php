<?php

require_once '..\php_guille_cliente\controlador\parametros_juego.php';

if ($_GET['controlador'] === 'ParametrosJuego' && $_GET['action'] === 'obtenerParametrosJuego') {
    $controlador = new ParametrosJuego();
    $parametros = $controlador->obtenerParametrosJuego();
    echo $parametros;
}


?>
