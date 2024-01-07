<?php 
/**
 * FILEPATH: /d:/xamp/htdocs/projects/2324_2DAW_TRASH_INVADERS/index.php
 *
 * This file is the entry point of the application. It sets up the necessary configurations,
 * loads the appropriate controller based on the URL parameters, and generates the HTML content.
 */

ini_set('display_errors', 1);

require_once getcwd() . '/src/php/config/serverconfig.php';

// If no controller is specified in the URL, use the default controller
if (!isset($_GET["controlador"])) {
    $_GET["controlador"] = constant("DEFAULT_CONTROLLER");
}

// If no action is specified in the URL, use the default action
if (!isset($_GET["action"])) {
    $_GET["action"] = constant("DEFAULT_ACTION");
}

// Construct the path to the controller
$ruta_controlador = "src/php/controladores/" . strtolower($_GET["controlador"]) . ".php";

// If the controller does not exist, use the default controller
if (!file_exists($ruta_controlador)) {
    $ruta_controlador = "src/php/controladores/" . constant("default_controler") . ".php";
}

// Load the controller
require_once getcwd() . "/" .  $ruta_controlador;

$nombre_controlador = $_GET["controlador"] . "Controller";
$controlador = new $nombre_controlador();

// Data for the views
$datos["datos"] = array();
if (method_exists($controlador, $_GET["action"])) {
    $datos["datos"] = $controlador->{$_GET["action"]}();
}

// Generate the HTML content
require_once getcwd() . '/src/php/vistas/templates/header.php';
require_once getcwd() . '/src/php/vistas/' . $controlador->vista . '.php';
require_once getcwd() . '/src/php/vistas/templates/footer.php';

?>