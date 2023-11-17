<?php
    //Incluir el archivo de configuración
    require_once('../config/config.php');

    //Iniciar sesión
    session_start();

    //Verificar si ya hay una sesión activa, si es así, redirigir al menú del jugador
    if(isset($_SESSION['usuario'])) {
        header("Location: menu_jugador.php");
        exit();
    }

    //Verificar si se recibieron datos del formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtener los datos del formulario
        $nickname = $_POST['nickname'];
        $password = $_POST['password'];

        //Validar los datos (puedes agregar más validaciones según tus necesidades)

        // Verificar las credenciales en la base de datos
        if ($nickname == "usuario_valido" && $password == "contraseña_valida") {
            // Credenciales válidas, iniciar sesión
            $_SESSION['usuario'] = $nickname;

            // Redirigir al menú del jugador o a la página deseada
            header("Location: menu_jugador.php");
            exit();
        } else {
            // Credenciales inválidas, mostrar un mensaje de error o realizar otras acciones necesarias
            $error_message = "Credenciales incorrectas. Inténtalo de nuevo.";
        }
    }
?>