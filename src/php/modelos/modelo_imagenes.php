<?php

class ModeloImagenes {
    private $conexion;
    function __construct() {
        /* Llamamos al método conexión y creamos una */
        $this->conexion = $this->conexion();
        
    }

    public function conexion() {

        $conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);
        $conexion->set_charset('utf8');

        return $conexion;
    }

    public function mostrasImagenes() {
        $stmt = $this->conexion->prepare("SELECT imagen FROM imagen");
        $stmt->execute();
        $stmt->bind_result($imagen);

        while ($stmt->fetch()) {
            echo '<img src="data:image/jpeg;base64,' . base64_encode($imagen) . '" alt="Fetched Image">';
        }

        $stmt->close();
        $this->conexion->close();
    }

    public function agregarImagen($_FILES) {
        $stmt = $this->conexion->prepare("INSERT INTO imagen (nombre, imagen, hash) VALUES (?, ?, ?)");
        $stmt->bind_param("sbs", $nombre, $imagen, $hash);
        $imagenes = $_FILES['imagenes'];

        for($i = 0; $i < count($imagenes['name']); $i++) {
            $nombre = basename($imagenes['name'][$i]);
            $imagenData = file_get_contents($imagenes['tmp_name'][$i]);
            $hash = hash('sha256', $imagenData);
    
            // Check if the hash already exists in the database
            $checkStmt = $conn->prepare("SELECT COUNT(*) FROM imagen WHERE hash = ?");
            $checkStmt->bind_param("s", $hash);
            $checkStmt->execute();
            $checkStmt->bind_result($count);
            $checkStmt->fetch();
            $checkStmt->close();
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
}
?>