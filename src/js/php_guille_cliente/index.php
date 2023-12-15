<?php

require_once '..\php_guille_cliente\controlador\parametros_juego.php';

if ($_GET['controlador'] === 'ParametrosJuego' && $_GET['action'] === 'obtenerParametrosJuego') {
    $controlador = new ParametrosJuego();
    $parametros = $controlador->obtenerParametrosJuego();
    echo $parametros;
}

if ($_GET['controlador'] === 'Usuarios' && $_GET['action'] === 'comprobarLogin') {
    echo "Estoy funcionando";
}

echo 'Hola mundo';

?>
