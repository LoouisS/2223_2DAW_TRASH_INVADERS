<?php

require_once 'src\php\config\config.php';

class ModeloImagenes {
    private $conexion;
    function __construct() {
        $this->conexion = $this->conexion();
    }

    public function conexion() {
        $this->conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);
        $this->conexion->set_charset('utf8');

        return $this->conexion;
    }

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

    public function agregarImagen($archivos) {
        
        $stmt = $this->conexion->prepare("INSERT INTO imagen (nombre, imagen, hash) VALUES (?, ?, ?)");
        $stmt->bind_param("sbs", $nombre, $imagen, $hash);

        if(isset($archivos['imagenes'])){
            $imagenes = $archivos['imagenes'];

            for($i = 0; $i < count($imagenes['name']); $i++) {
                $nombre = basename($imagenes['name'][$i]);
                $imagenData = file_get_contents($imagenes['tmp_name'][$i]);
                $hash = hash('sha256', $imagenData);
        
                // Validar la extensión del archivo
                $extension = pathinfo($nombre, PATHINFO_EXTENSION);
                $allowedExtensions = array("jpg", "jpeg", "png");

                if (!in_array($extension, $allowedExtensions)) {
                    // Cambiar esto por una vista
                    echo "Error: El archivo $nombre tiene una extensión no permitida. <br>";
                    continue; 
                }
        
                $count = $this->checkHash($hash);
                if ($count > 0) {
                    // Cambiar esto por una vista
                    echo "Error: El archivo $nombre ya existe en la base de datos. <br>";
                    continue; 
                }
        
                // Insertar los datos en la base de datos
                $stmt->send_long_data(1, $imagenData);
                if ($stmt->execute() === FALSE) {
                    // Cambiar esto por una vista
                    echo "Error: " . $stmt->error;
                }
            }
        }
    }

    public function checkHash($hash) {
        $stmt = $this->conexion->prepare("SELECT COUNT(*) FROM imagen WHERE hash = ?");
        $stmt->bind_param("s", $hash);
        $stmt->execute();
        $stmt->bind_result($count);
        $stmt->fetch();
        $stmt->close();

        return $count;
    }

    public function eliminarImagen($imagenes) {
        
        $stmt = $this->conexion->prepare("DELETE FROM imagen WHERE idImagen = ?");
        $stmt->bind_param("i", $imagenes);
        $stmt->execute();
        $stmt->close();
    }

    // TODO Terminar de implementar este metodo
    public function modificarImagen($idImagen, $nombre) {
        $stmt = $this->conexion->prepare("UPDATE imagen SET nombre = ? WHERE idImagen = ?");
        $stmt->bind_param("ssi", $nombre, $idImagen);
        $stmt->execute();
        $stmt->close();
    }
}
?>