<?php 

require_once 'src/php/config/config.php';
require_once 'src/php/controladores/imagenes.php';

session_start();
error_reporting(0);

$imagenes = new Imagenes();


if ($_GET['action'] == 'borrarImagen' && $_GET['controller'] == 'imagenes' ) {
    $imagenes->borrarImagen($_GET['idImagen']);
} elseif ($_GET['action'] == 'subirImagenes' && $_GET['controller'] == 'imagenes' ) {
    // Aquí puedes agregar el código que deseas ejecutar cuando la ruta coincida
    $imagenes->subirImagenes($_FILES);
    
} 

$imagenes->mostrarImagen();

// $controlador = "src/php/controladores/imagenes.php";

// require_once $controlador;

?>