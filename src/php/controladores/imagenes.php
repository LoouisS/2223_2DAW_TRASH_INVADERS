<?php

require_once getcwd() . '/src/php/modelos/modelo_imagenes.php';

class Imagenes {
    
    public $vista;
    public $modelo;

    function __construct() {
        $this->vista = 'vista_imagenes';
        $this->modelo = new ModeloImagenes();
    }

    public function mostrarImagen() {
        $imagenes = $this->modelo->mostrarImagen();
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
   

    public function seleccionarImagen() {
        if (!isset($_SESSION['idUsuario'])) {
            // Redirigir a la página de inicio de sesión si no hay un usuario autenticado
            header('Location: index.php?controlador=ControladorInicioSesion&action=mostrarFormularioInicioSesion');
            exit();
        }
    
        // Obtener el ID del usuario desde la sesión
        $idUsuario = $_SESSION['idUsuario'];
        // Verificar si se ha enviado un formulario para seleccionar una imagen
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['seleccionImagen'])) {
            $selectedImageId = $_POST['seleccionImagen'];
            // Obtener la información de la imagen seleccionada (esto puede depender de cómo esté implementado tu modelo)
            $selectedImage = $this->modelo->mostrarImagenPorId($selectedImageId); // Reemplaza con la función real
            if ($selectedImage) {
                // Puedes hacer algo con la imagen seleccionada aquí si es necesario
                // Por ejemplo, podrías almacenar la información de la imagen en la sesión para mostrarla después de redireccionar
                $_SESSION['selectedImage'] = $selectedImage;
            }
        }
    
        // Redireccionar a la página de mostrar mejoras
        header('Location: index.php?controlador=ControladorMejora&action=mostrarMejoras');
    }
    

    public function subirImagenes() {
        $this->modelo->agregarImagen($_FILES);
    }

    public function borrarImagen() {
        $this->modelo->eliminarImagen((int)$$_GET['idImagen']);
    }

    public function confirmarBorrado() {
        $imagen = $this->modelo->mostrarImagenPorId((int)$_GET['idImagen']);
        $this->vista = 'confirmar_borrado';
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }

    public function ejecucionBorrado() {
        $this->modelo->eliminarImagen($_GET['idImagen']);
        header('Location: index.php?controlador=Imagenes&action=mostrarImagen&borrado=BorradoCorrecto');
    }

    public function confirmaSubida() {
        $this->modelo->agregarImagen($_FILES);
        $this->vista = 'confirmacion_subida';  
        header('Location: index.php?controlador=Imagenes&action=mostrarImagen&subidaCorrecta=Ok');
    }

    public function extensionIncorrecta() {
        $imagenes = $this->modelo->mostrarImagen();
        $this->vista = 'extension_incorrecta';
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }
}

?>