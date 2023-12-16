<?php

require_once getcwd() . '/src/php/modelos/modelo_imagenes.php';

class ImagenesController {
    
    public $vista;
    public $modelo;

    function __construct() {
        $this->vista = 'vista_imagenes';
        $this->modelo = new ModeloImagenes();
    }

    public function mostrarImagen() {
        $this->vista = 'vista_imagenes';
        $imagenes = $this->modelo->mostrarImagen();
        return $imagenes;
    }

    public function subirImagenes() {

        $this->modelo->agregarImagen($_FILES);
    }

    public function borrarImagen() {
        $idImagen = (int)$_GET['idImagen'];
        $this->modelo->eliminarImagen($idImagen);
    }

    public function confirmarBorrado() {
        $this->vista = 'confirmar_borrado';
        $imagen = $this->modelo->mostrarImagenPorId((int)$_GET['idImagen']);
        return $imagen;
    }

    public function ejecucionBorrado() {
        $idImagen = $_GET['idImagen'];
        $this->modelo->eliminarImagen($idImagen);
        header('Location: index.php?controlador=Imagenes&action=mostrarImagen&borrado=BorradoCorrecto');
    }

    public function confirmaSubida() {
        $archivos = $_FILES;
        
        $allowedExtensions = ['jpg', 'jpeg', 'png'];
        $maxSize = 5 * 1024 * 1024;

        if (isset($archivos['imagenes'])) {
            $imagenes = $archivos['imagenes'];
            for ($i = 0; $i < count($imagenes['name']); $i++) {
                if (empty($imagenes['tmp_name'][$i]) || file_get_contents($imagenes['tmp_name'][$i]) === '') {
                    // Elimina el elemento vacío del array
                    unset($imagenes['name'][$i]);
                    unset($imagenes['type'][$i]);
                    unset($imagenes['tmp_name'][$i]);
                    unset($imagenes['error'][$i]);
                    unset($imagenes['size'][$i]);
                    continue;

                }
        }

        $this->modelo->agregarImagen($_FILES);

        $this->vista = 'confirmacion_subida';  
        header('Location: index.php?controlador=Imagenes&action=mostrarImagen&subidaCorrecta=Ok');
    }

    public function extensionIncorrecta() {
        $imagenes = $this->modelo->mostrarImagen();
        $this->vista = 'extension_incorrecta';
        return $imagenes;
    }
}

?>