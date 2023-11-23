<!-- Antonio Manuel Figueroa Pinilla -->
<!-- Modelo de gestión para la base de datos  trashinvadersdb -->
<?php
    require_once 'config/config.php';

    class Tidb {

        private $host;
        private $trashinvadersdb;
        private $usuario;
        private $password;
        public $conexion;
    
        public function __construct() {		
    
            $this->host = constant('HOST');
            $this->trashinvadersdb = constant('TRASHINVADERSBD');
            $this->usuario = constant('USUARIO');
            $this->password = constant('PSWBD');
        }
    }
?>