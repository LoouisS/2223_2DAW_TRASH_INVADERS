<?php 


session_start();


ini_set('display_errors', 1);

require_once getcwd() . '/config/serverconfig.php';
require_once getcwd() . '/controladores/imagenes.php';
require_once getcwd() . '/modelos/modelo_mejora.php';
require_once getcwd() . "/controladores/controlador_mejora.php";
require_once getcwd() . '/controladores/usuario.php';
require_once getcwd() . '/modelos/modelo_inicio_sesion.php';
require_once getcwd() . '/controladores/sesion.php';
require_once getcwd() . '/modelos/modelo_menu.php';
require_once getcwd() . '/controladores/menu.php';
require_once getcwd() . '/controladores/controlador_inicio_sesion.php';
require_once getcwd() . '/controladores/credenciales_incorrectas.php';
require_once getcwd() . '/controladores/controlador_imagenes_usuario.php';
require_once getcwd() . '/controladores/controlador_parametros_juego.php';


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
    $ruta_controlador = "src/php/controladores/" . constant("DEFAULT_CONTROLLER") . ".php";
}

// Se carga el controlador
require_once getcwd() . "/" .  $ruta_controlador;

$nombre_controlador = $_GET["controlador"];
$controlador = new $nombre_controlador();


// Datos para las vistas

$datos["datos"] = array();
if (method_exists($controlador, $_GET["action"])) {
    $datos["datos"] = $controlador->{$_GET["action"]}();
}


?>