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

    public function obtenerMejoras() {
        // Modifica la consulta para obtener las descripciones únicas
        $result = $this->conexion->prepare("SELECT idMejora, descripcion, multiplicador, duracionMejora FROM mejora");
        $result->execute();
        $result->bind_result($idMejora, $descripcion, $multiplicador, $duracionMejora);
    
        $resultados = [];
    
        while ($result->fetch()) {
            $resultados[] = [
                'idMejora' => $idMejora,
                'descripcion' => $descripcion,
                'multiplicador' => $multiplicador,
                'duracionMejora' => $duracionMejora
            ];
        }
    
        $result->close();
        $this->conexion->close();
    
        return $resultados;
    }
    

    public function obtenerMejorasPorId($idMejora) {
        $result = $this->conexion->prepare("SELECT idMejora, descripcion, multiplicador, duracionMejora FROM mejora WHERE idMejora = ?");
        $result->bind_param("i", $idMejora);
        $result->execute();
        $result->bind_result($idMejora, $descripcion, $multiplicador, $duracionMejora);

        // Verificamos si se obtuvo algún resultado
        if ($result->fetch()) {
            $result->close();

            $resultados = [
                'idMejora' => $idMejora,
                'descripcion' => $descripcion,
                'multiplicador' => $multiplicador,
                'duracionMejora' => $duracionMejora
            ];

            return $resultados;
        } else {
            // Manejar el caso en el que no se encontraron resultados
            return null;
        }
    }

    public function agregarMejora($descripcion, $multiplicador, $duracionMejora) {
        // Insertar nueva mejora
        $stmt = $this->conexion->prepare("INSERT INTO mejora (descripcion, multiplicador, duracionMejora) VALUES (?, ?, ?)");
        $stmt->bind_param("sii", $descripcion, $multiplicador, $duracionMejora);

        return $stmt->execute();
    }

    public function actualizarMejora($idMejora, $descripcion, $multiplicador, $duracionMejora) {
        // Actualizar mejora por ID
        $stmt = $this->conexion->prepare("UPDATE mejora SET descripcion = ?, multiplicador = ?, duracionMejora = ? WHERE idMejora = ?");
        $stmt->bind_param("siii", $descripcion, $multiplicador, $duracionMejora, $idMejora);

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
