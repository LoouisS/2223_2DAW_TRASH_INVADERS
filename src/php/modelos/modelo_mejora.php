<?php

require_once getcwd() . '/src/php/config/config.php';

class ModeloMejora {
    private $conexion;
    function __construct() {
        $this->conexion = $this->conexion();
    }

    public function conexion() {
        $this->conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);
        $this->conexion->set_charset('utf8');

        return $this->conexion;
    }

/*
    public function obtenerMejoras() {
        $resultados = array();

        // Obtener todas las mejoras
        $query = "SELECT idMejora, descripcion, multiplicador, duracionMejora, activado FROM mejora";
        $result = $this->conexion->query($query);

        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $resultados[] = $row;
            }
        }

        return $resultados;
    }
*/
    public function obtenerMejoras() {
        $result = $this->conexion->prepare("SELECT idMejora, descripcion, multiplicador, duracionMejora, activado FROM mejora");
        $result->execute();
        $result->bind_result($idMejora, $descripcion, $multiplicador,$duracionMejora,$activado);

        $resultados = [];

        while ($result->fetch()) {
            $resultados[] = [
                'idMejora' => $idMejora,
                'descripcion' => $descripcion,
                'multiplicador' => ($multiplicador),
                'duracionMejora' => ($duracionMejora),
                'activado' => ($activado)

            ];
        }
        $result->close();
        $this->conexion->close();

        return $resultados;

    }

    public function agregarMejora($descripcion, $multiplicador, $duracionMejora, $activado) {
        // Insertar nueva mejora
        $stmt = $this->conexion->prepare("INSERT INTO mejora (descripcion, multiplicador, duracionMejora, activado) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("siii", $descripcion, $multiplicador, $duracionMejora, $activado);

        return $stmt->execute();
    }

    public function actualizarMejora($idMejora, $descripcion, $multiplicador, $duracionMejora, $activado) {
        // Actualizar mejora por ID
        $stmt = $this->conexion->prepare("UPDATE mejora SET descripcion = ?, multiplicador = ?, duracionMejora = ?, activado = ? WHERE idMejora = ?");
        $stmt->bind_param("siiii", $descripcion, $multiplicador, $duracionMejora, $activado, $idMejora);

        return $stmt->execute();
    }

    public function eliminarMejora($idMejora) {
        // Eliminar mejora por ID
        $stmt = $this->conexion->prepare("DELETE FROM mejora WHERE idMejora = ?");
        $stmt->bind_param("i", $idMejora);

        return $stmt->execute();
    }

    public function cerrarConexion() {
        $this->conexion->close();
    }
}

?>
