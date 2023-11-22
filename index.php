<?php 

require_once 'src/php/config/config.php';
require_once 'src/php/controladores/imagenes.php';

session_start();



$imagenes = new Imagenes();

$imagenes->mostrarImagen();

// $controlador = "src/php/controladores/imagenes.php";

// require_once $controlador;

?>