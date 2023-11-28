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

    public function eliminarMejora($idMejora) {
        $exito = $this->modelo->eliminarMejora($idMejora);

        if ($exito) {
            // Redireccionar o mostrar un mensaje de éxito
        } else {
            // Redireccionar o mostrar un mensaje de error
        }
    }
}

?>

