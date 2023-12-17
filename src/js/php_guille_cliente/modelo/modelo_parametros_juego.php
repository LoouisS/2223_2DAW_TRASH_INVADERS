<?php

define("HOST", "18.2daw.esvirgua.com");
define("DATABASE", "user2daw_BD2-18");
define("USER", "user2daw_18");
define("PASSWORD", "B8ML(10P{v11");

class ModeloParametrosJuego{

    private $conexion;

    function __construct() {
        $this->conexion = $this->conexion();
    }

    public function conexion() {
        $this->conexion = new mysqli(HOST, USER, PASSWORD, DATABASE);
        $this->conexion->set_charset('utf8');

        return $this->conexion;
    }

    public function obtenerParametrosJuego() {
        $stmt = $this->conexion->prepare("SELECT * FROM parametros");
        $stmt->execute();
        $stmt->bind_result($velocidad_basura, $generacion_basura, $bolsa_limite_orila, $prob_aparicion_mejora);
        
        $fetchedParameters = [];
        
        while ($stmt->fetch()) {
            $fetchedParameters[] = [
                'velocidad_basura' => $velocidad_basura,
                'generacion_basura' => $generacion_basura,
                'bolsa_limite_orila' => $bolsa_limite_orila,
                'prob_aparicion_mejora' => $prob_aparicion_mejora
            ];
        }

        $stmt->close();
        $this->conexion->close();

        return json_encode($fetchedParameters);
    }


}

?>