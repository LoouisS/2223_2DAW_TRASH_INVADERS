<?php

require_once getcwd() . '/src/php/config/config.php';

/**
 * Class ModeloImagenes
 *
 * @package modelos
 */
class ModeloImagenes {
    private $conexion;

    /**
     * ModeloImagenes constructor.
     */
    function __construct() {
        $this->conexion = $this->conexion();
    }

    /**
     * Establishes a database connection.
     *
     * @return mysqli The database connection.
     */
    public function conexion() {
        $this->conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);
        $this->conexion->set_charset('utf8');

        return $this->conexion;
    }

    /**
     * Retrieves all images from the database.
     *
     * @return array The fetched images.
     */
    public function mostrarImagen() {
        $stmt = $this->conexion->prepare("SELECT idImagen, nombre, imagen FROM imagen");
        $stmt->execute();
        $stmt->bind_result($idImagen, $nombre, $imagen);

        $fetchedImages = [];

        while ($stmt->fetch()) {
            $fetchedImages[] = [
                'idImagen' => $idImagen,
                'nombre' => $nombre,
                'imagen' => base64_encode($imagen)
            ];
        }

        $stmt->close();
        $this->conexion->close();

        return $fetchedImages;
    }

    /**
     * Retrieves an image by its ID from the database.
     *
     * @param int $idImagen The ID of the image.
     * @return array The fetched image.
     */
    public function mostrarImagenPorId($idImagen) {
        $stmt = $this->conexion->prepare("SELECT idImagen, nombre, imagen FROM imagen WHERE idImagen = ?");
        $stmt->bind_param("i", $idImagen);
        $stmt->execute();
        $stmt->bind_result($idImagen, $nombre, $imagen);
        $stmt->fetch();
        $stmt->close();

        $fetchedImage = [
            'idImagen' => $idImagen,
            'nombre' => $nombre,
            'imagen' => base64_encode($imagen)
        ];

        return $fetchedImage;
    }

    /**
     * Adds an image to the database.
     *
     * @param array $archivos The image files.
     */
    public function agregarImagen($archivos) {
        $nombre = $archivos['name']; // Seleccionar el primer nombre de archivo (ajusta según tu lógica)
        $hash = $archivos['hash'];
        $imagen = $archivos['base64'];

        // Convertir la cadena Base64 de nuevo a datos binarios antes de insertar en la base de datos
        $imagenBinaria = base64_decode($imagen);

        $stmt = $this->conexion->prepare("INSERT INTO imagen (nombre, imagen, hash) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $nombre, $imagenBinaria, $hash);

        if ($stmt->execute() === FALSE) {
            // Error al insertar. Habria que redireccionar a otra vista o mostrar una pantalla de error
        }

        $stmt->close();
    }
    
    /**
     * Checks if a hash exists in the database.
     *
     * @param string $hash The hash to check.
     * @return int The count of matching hashes.
     */
    public function checkHash($hash) {
        $stmt = $this->conexion->prepare("SELECT COUNT(*) FROM imagen WHERE hash = ?");
        $stmt->bind_param("s", $hash);
        $stmt->execute();
        $stmt->bind_result($count);
        $stmt->fetch();
        $stmt->close();

        return $count;
    }

    /**
     * Deletes an image from the database.
     *
     * @param int $imagenes The ID of the image to delete.
     */
    public function eliminarImagen($imagenes) { 
        $stmt = $this->conexion->prepare("DELETE FROM imagen WHERE idImagen = ?");
        $stmt->bind_param("i", $imagenes);
        $stmt->execute();
        $stmt->close();
    }

}
?>