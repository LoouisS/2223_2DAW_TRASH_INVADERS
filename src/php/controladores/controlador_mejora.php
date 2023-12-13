<?php

require_once getcwd() . '/src/php/modelos/modelo_mejora.php';


class ControladorMejora {
    private $vista;
    private $modelo;

    public function __construct() {
        $this->vista = 'vista_mejoras';
        $this->modelo = new ModeloMejora();
    }

        // Nuevo método para manejar la selección de imagen
    public function seleccionarImagen() {
        // Verificar si se ha enviado un formulario para seleccionar una imagen
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['seleccionImagen'])) {
            $selectedImageId = $_POST['seleccionImagen'];
            // Obtener la información de la imagen seleccionada (esto puede depender de cómo esté implementado tu modelo)
            $selectedImage = $this->modelo->obtenerMejorasPorId($selectedImageId);
            if ($selectedImage) {
                $_SESSION['selectedImage'] = $selectedImage;
            }
        }

        header('Location: index.php?controlador=ControladorMejora&action=mostrarMejoras');
        exit();

    }

    public function mostrarMejoras() {
        // Verificar si hay un usuario autenticado
        if (!isset($_SESSION['idUsuario'])) {
            // Redirigir a la página de inicio de sesión si no hay un usuario autenticado
            header('Location: index.php?controlador=ControladorInicioSesion&action=mostrarFormularioInicioSesion');
            exit();
        }
    
        // Obtener el ID del usuario desde la sesión
        $idUsuario = $_SESSION['idUsuario'];
    
        // Obtener las mejoras específicas de ese usuario
        $mejoras = $this->modelo->obtenerMejorasPorUsuario($idUsuario);
    
        // Para cada mejora, obtener la imagen asociada (si existe)
        foreach ($mejoras as &$mejora) {
            $imagen = $this->modelo->obtenerImagenPorMejoraUsuario($mejora['idMejora'], $idUsuario);
            if ($imagen) {
                $mejora['imagen'] = $imagen['imagen'];
            }
        }
    
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }  
    
    public function agregarMejora() {
        // Obtener valores del formulario
        $descripcion = $_POST['descripcion'] ?? '';
        $multiplicador = $_POST['multiplicador'] ?? 0;
        $duracionMejora = $_POST['duracionMejora'] ?? 0;
        $porcentaje_aparicion = $_POST['porcentaje_aparicion'] ?? 0;
    
        // Obtener la información de la imagen seleccionada, si existe
        $selectedImage = $_SESSION['selectedImage'] ?? null;
    
        // Llamar al método del modelo para agregar la mejora
        $idMejora = $this->modelo->agregarMejora($descripcion, $multiplicador, $duracionMejora, $porcentaje_aparicion);
    
        // Verificar si hay una imagen seleccionada
        if ($selectedImage && $idMejora) {
            // Insertar la información en la tabla "usuario_mejora_imagen"
            $this->modelo->agregarImagenMejoraUsuario($idMejora, $selectedImage);
            // Limpiar la imagen seleccionada de la sesión después de procesarla
            unset($_SESSION['selectedImage']);
        }
    
        // Redirigir a la página de mostrarMejoras
        header('Location: index.php?controlador=ControladorMejora&action=mostrarMejoras');
        exit();
    }

    public function agregarDobleMejora() {
        // Obtener valores del formulario
        $descripcion = $_POST['descripcion'] ?? '';
        $multiplicador = $_POST['multiplicador'] ?? 0;
        $duracionMejora = $_POST['duracionMejora'] ?? 0;
        $porcentaje_aparicion = $_POST['porcentaje_aparicion'] ?? 0;
    
        // Obtener la información de la imagen seleccionada, si existe
        $selectedImage = $_SESSION['selectedImage'] ?? null;
    
        // Llamar al método del modelo para agregar la mejora
        $idMejora = $this->modelo->agregarMejora($descripcion, $multiplicador, $duracionMejora, $porcentaje_aparicion);
    
        // Verificar si hay una imagen seleccionada y un ID de mejora
        if ($selectedImage && $idMejora) {
            // Insertar la información en la tabla "usuario_imagen_mejora"
            $this->modelo->agregarImagenMejoraUsuario($idMejora, $selectedImage);
            // Limpiar la imagen seleccionada de la sesión después de procesarla
            unset($_SESSION['selectedImage']);
        }
    
        // Redirigir a la página de mostrarMejoras
        header('Location: index.php?controlador=ControladorMejora&action=mostrarMejoras');
        exit();
    }
    
    

    public function confirmarBorrado() {
        // Obtener la mejora por su ID
        $idMejora = (int)$_GET['idMejora'];
        $mejora = $this->modelo->obtenerMejorasPorId($idMejora);
    
        // Verificar si se encontró la mejora
        if ($mejora) {
            // Incluir la vista de confirmación de borrado
            $this->vista = 'confirmar_borrado_mejora';
            require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
        } else {
            // Manejar el caso en el que no se encontró la mejora
            echo "Error: La mejora no se encontró.";
        }
    }

    public function ejecucionBorrado() {
        // Obtener el ID de la mejora a eliminar
        $idMejora = (int)$_GET['idMejora'];
        
        // Llamar al método del modelo para eliminar la mejora
        $exito = $this->modelo->eliminarMejora($idMejora);
    
        if ($exito) {
            // Redirigir a la página de mostrarMejoras después de la eliminación
            header('Location: index.php?controlador=ControladorMejora&action=mostrarMejoras');
            exit();
        } else {
            // Manejar el caso de error (puedes redirigir o mostrar un mensaje de error)
            echo "Error al eliminar la mejora.";
        }
    }
      
}

?>

