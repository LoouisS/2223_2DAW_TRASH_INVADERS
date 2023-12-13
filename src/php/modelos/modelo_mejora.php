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
        $result = $this->conexion->prepare("SELECT idMejora, descripcion, multiplicador, duracion_mejora, porcentaje_aparicion FROM mejora");
        $result->execute();
        $result->bind_result($idMejora, $descripcion, $multiplicador, $duracion_mejora, $porcentaje_aparicion);
    
        $resultados = [];
    
        while ($result->fetch()) {
            $resultados[] = [
                'idMejora' => $idMejora,
                'descripcion' => $descripcion,
                'multiplicador' => $multiplicador,
                'duracion_mejora' => $duracion_mejora,
                'porcentaje_aparicion' => $porcentaje_aparicion
            ];
        }
    
        $result->close();
        $this->conexion->close();
    
        return $resultados;
    }

    public function agregarImagenMejoraUsuario($idMejora, $selectedImage) {
        if ($selectedImage && $idMejora) {
            // Verificar si el idMejora existe en la tabla mejora
            $stmt_check_mejora = $this->conexion->prepare("SELECT idMejora FROM mejora WHERE idMejora = ?");
            $stmt_check_mejora->bind_param("i", $idMejora);
            $stmt_check_mejora->execute();
            $stmt_check_mejora->store_result();
            
    
            if ($stmt_check_mejora->num_rows > 0) {
                // El idMejora existe, continuar con la inserción en usuario_imagen_mejora
                $stmt_check_mejora->close();
    
                // Obtener la información de la imagen
                $idImagen = $selectedImage['idImagen'] ?? null;
    
                if ($idImagen) {
                    // Insertar información en la tabla "usuario_imagen_mejora"
                    $stmt = $this->conexion->prepare("INSERT INTO usuario_imagen_mejora (idUsuario, idMejora, idImagen) VALUES (?, ?, ?)");
                    $stmt->bind_param("iii", $_SESSION['idUsuario'], $idMejora, $idImagen);
                    $stmt->execute();
                    $stmt->close();
                }
            } else {
                // El idMejora no existe en la tabla mejora, manejar el error según tus necesidades
                $stmt_check_mejora->close();
                echo "Error: El idMejora no existe en la tabla mejora.";
            }
        }
    }

    public function obtenerMejorasPorId($idMejora) {
        $result = $this->conexion->prepare("SELECT idMejora, descripcion, multiplicador, duracion_mejora, porcentaje_aparicion FROM mejora WHERE idMejora = ?");
        $result->bind_param("i", $idMejora);
        $result->execute();
        $result->bind_result($idMejora, $descripcion, $multiplicador, $duracion_mejora, $porcentaje_aparicion);
    
        // Verificamos si se obtuvo algún resultado
        if ($result->fetch()) {
            $result->close();
    
            $resultados = [
                'idMejora' => $idMejora,
                'descripcion' => $descripcion,
                'multiplicador' => $multiplicador,
                'duracion_mejora' => $duracion_mejora,
                'porcentaje_aparicion' => $porcentaje_aparicion
            ];
    
            return $resultados;
        } else {
            // Manejar el caso en el que no se encontraron resultados
            return null;
        }
    }
    

    public function agregarMejora($descripcion, $multiplicador, $duracion_mejora, $porcentaje_aparicion) {
        // Insertar nueva mejora
        $stmt = $this->conexion->prepare("INSERT INTO mejora (descripcion, multiplicador, duracion_mejora,porcentaje_aparicion ) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("siii", $descripcion, $multiplicador, $duracion_mejora, $porcentaje_aparicion);

        return $stmt->execute();
    }

    public function actualizarMejora($idMejora, $descripcion, $multiplicador, $duracion_mejora, $porcentaje_aparicion) {
        // Actualizar mejora por ID
        $stmt = $this->conexion->prepare("UPDATE mejora SET descripcion = ?, multiplicador = ?, duracion_mejora = ?, porcentaje_aparicion = ? WHERE idMejora = ?");
        $stmt->bind_param("siiii", $descripcion, $multiplicador, $duracion_mejora, $porcentaje_aparicion, $idMejora);

        return $stmt->execute();
    }

    

    public function eliminarMejora($idMejora) {
        // Eliminar mejora por ID
        $stmt = $this->conexion->prepare("DELETE FROM usuario_imagen_mejora WHERE idMejora = ?");
        $stmt->bind_param("i", $idMejora);

        return $stmt->execute();
    }

    public function cerrarConexion() {
        $this->conexion->close();
    }


    public function obtenerMejorasPorUsuario($idUsuario) {
        $result = $this->conexion->prepare("SELECT m.idMejora, m.descripcion, m.multiplicador, m.duracion_mejora, m.porcentaje_aparicion FROM mejora m
                                            INNER JOIN usuario_imagen_mejora uim ON m.idMejora = uim.idMejora
                                            WHERE uim.idUsuario = ?");
        $result->bind_param("i", $idUsuario);
        $result->execute();
        $result->bind_result($idMejora, $descripcion, $multiplicador, $duracion_mejora, $porcentaje_aparicion);
    
        $resultados = [];
    
        while ($result->fetch()) {
            $resultados[] = [
                'idMejora' => $idMejora,
                'descripcion' => $descripcion,
                'multiplicador' => $multiplicador,
                'duracion_mejora' => $duracion_mejora,
                'porcentaje_aparicion' => $porcentaje_aparicion
            ];
        }
    
        $result->close();
    
        return $resultados;
    }
    
    public function obtenerImagenPorMejoraUsuario($idMejora, $idUsuario) {
        $result = $this->conexion->prepare("SELECT i.imagen FROM imagen i
                                            INNER JOIN usuario_imagen_mejora uim ON i.idImagen = uim.idImagen
                                            WHERE uim.idMejora = ? AND uim.idUsuario = ?");
        $result->bind_param("ii", $idMejora, $idUsuario);
        $result->execute();
        $result->bind_result($imagen);
    
        // Verificamos si se obtuvo algún resultado
        if ($result->fetch()) {
            $result->close();
    
            return [
                'imagen' => base64_encode($imagen)
            ];
        } else {
            // No se encontraron resultados
            return null;
        }
    }
}





?>
