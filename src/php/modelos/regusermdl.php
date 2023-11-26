<?php
    // Definición de la clase UsuarioModel
    class RegistroMdl {
        // Propiedad privada para la conexión a la base de datos
        private $conexion;

        // Constructor de la clase
        public function __construct() {
            // Incluir el archivo de configuración para obtener datos de conexión
            require_once getcwd() . '/../config/config.php';

            // Establecer la conexión a la base de datos usando PDO
            $this->conexion = new PDO('mysql:host=' . HOST . '; dbname=' . TRASHINVADERSBD, USUARIO, PSWBD);
        }

        //Método para verificar si un usuario ya existe en la base de datos
        public function usuarioExiste($nombre) {
            // Consulta SQL para buscar un usuario por nombre
            $consulta = "SELECT * FROM usuarios WHERE nombre = ?";
            
            //Preparar la consulta
            $sentencia = $this->conexion->prepare($consulta);
            
            // Ejecutar la consulta con el nombre proporcionado
            $sentencia->execute([$nombre]);

            // Si hay al menos una fila, el usuario ya estaba registrado
            return $sentencia->rowCount() > 0;
        }

        public function registrarUsuario($nombre, $contraseña) {
            //Hash de la contraseña
            $pswdcodificada = password_hash($contraseña, PASSWORD_DEFAULT);
    
            //Consulta SQL para insertar un nuevo usuario
            $consulta = "INSERT INTO usuarios (nombre, contraseña) VALUES (?, ?)";
            
            //Preparar la consulta
            $sentencia = $this->conexion->prepare($consulta);
    
            //Ejecutar la consulta con los datos proporcionados
            $resultado = $sentencia->execute([$nombre, $pswdcodificada]);
    
            // Devolver true si la inserción fue exitosa, false en caso contrario
            return $resultado;
        }
    }
?>

