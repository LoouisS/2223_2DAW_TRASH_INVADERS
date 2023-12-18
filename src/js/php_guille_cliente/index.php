<?php

require_once getcwd() .  '/controlador/parametros_juego.php';
require_once getcwd() .  '/controlador/registro.php';

if ($_GET['controlador'] === 'ParametrosJuego' && $_GET['action'] === 'obtenerParametrosJuego') {
    $controlador = new ParametrosJuego();
    $parametros = $controlador->obtenerParametrosJuego();
    echo $parametros;
} else if ($_GET['controlador'] === 'Registro' && $_GET['action'] === 'comprobarUsuario') {
    $controlador = new Registro();
    $num_of_rows = $controlador->comprobarUsuario();
    echo $num_of_rows;
} 



?>
