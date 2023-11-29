<?php

require_once getcwd() . '/src/php/modelos/modelo_mejora.php';


class ControladorMejora {
    private $vista;
    private $modelo;

    public function __construct() {
        $this->vista = 'vista_mejoras';
        $this->modelo = new ModeloMejora();
    }

    public function mostrarMejoras() {
        $mejoras = $this->modelo->obtenerMejoras();
        require_once getcwd() . '/src/php/vistas/' . $this->vista . '.php';
    }   
    
    public function agregarMejora() {
        // Obtener valores del formulario
        $descripcion = $_POST['descripcion'] ?? '';
        $multiplicador = $_POST['multiplicador'] ?? 0;
        $duracionMejora = $_POST['duracionMejora'] ?? 0;
        $activado = $_POST['activado'] ?? 0;
    
        // Llamar al método del modelo para agregar la mejora
        $this->modelo->agregarMejora($descripcion, $multiplicador, $duracionMejora, $activado);
    
        // Redirigir a la página de mostrarMejoras
        header('Location: index.php?controlador=ControladorMejora&action=mostrarMejoras');
        exit();
    }
    


/*
    public function agregarMejora($datosMejora) {
        $descripcion = $datosMejora['descripcion'] ?? '';
        $multiplicador = $datosMejora['multiplicador'] ?? 0;
        $duracionMejora = $datosMejora['duracionMejora'] ?? 0;
        $activado = $datosMejora['activado'] ?? 0;
    
        $exito = $this->modelo->agregarMejora($descripcion, $multiplicador, $duracionMejora, $activado);
    
        if ($exito) {
            // Redireccionar después de realizar la acción
            header('Location: index.php?controlador=mejora&action=ver');
            exit();
        } else {
            // Manejar el caso de error (puedes redirigir o mostrar un mensaje de error)
            echo "Error al agregar la mejora.";
        }
    }
*/  

    public function actualizarMejora($datosMejora) {
        $idMejora = $datosMejora['idMejora'] ?? 0;
        $descripcion = $datosMejora['descripcion'] ?? '';
        $multiplicador = $datosMejora['multiplicador'] ?? 0;
        $duracionMejora = $datosMejora['duracionMejora'] ?? 0;
        $activado = $datosMejora['activado'] ?? 0;

        $exito = $this->modelo->actualizarMejora($idMejora, $descripcion, $multiplicador, $duracionMejora, $activado);

        if ($exito) {
            // Redireccionar o mostrar un mensaje de éxito
        } else {
            // Redireccionar o mostrar un mensaje de error
        }
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

