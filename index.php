<?php 

require_once 'src/php/config/serverconfig.php';
require_once 'src/php/controladores/imagenes.php';

// Si no hay controlador en la URL, se usa el controlador por defecto
if (!isset($_GET["controlador"])) {
    $_GET["controlador"] = constant("DEFAULT_CONTROLLER");
}

// Si no hay acción en la URL, se usa la acción por defecto
if (!isset($_GET["action"])) {
    $_GET["action"] = constant("DEFAULT_ACTION");
}

// Se construye la ruta al controlador
$ruta_controlador = "src/php/controladores/" . strtolower($_GET["controlador"]) . ".php";

// Si el controlador no existe, se usa el controlador por defecto
if (!file_exists($ruta_controlador)) {
    $ruta_controlador = "src/php/controladores/" . constant("default_controler") . ".php";
}

// Se carga el controlador
require_once $ruta_controlador;

$nombre_controlador = $_GET["controlador"];
$controlador = new $nombre_controlador();


// Datos para las vistas

$datos["datos"] = array();
if (method_exists($controlador, $_GET["action"])) {
    $datos["datos"] = $controlador->{$_GET["action"]}();
}

require_once 'src/php/vistas/' . $controlador->vista . '.php';

?>