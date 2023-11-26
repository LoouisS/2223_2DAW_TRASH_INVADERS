<?php
    //Incluir los archivos necesarios
    require_once getcwd() . '/../config/config.php'; 
    require_once getcwd() .'/../modelos/regusermdl.php'; 

    //Verificar si la solicitud es de tipo POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        //Recuperar los datos del formulario
        $nombre = $_POST['nombre'];
        $contraseña = $_POST['contraseña'];

        //Validar si los campos obligatorios están vacíos
        if (empty($nombre) || empty($contraseña)) {
            // Redirigir a la página de registro con un mensaje de error
            header("Location: ../vistas/register.php?error=CamposObligatorios");
            exit(); // Detener la ejecución del script
        }

        //Instanciar un objeto usuario
        $usuario = new RegistroMdl();

        //Intentar registrar al usuario en la base de datos
        $registroExitoso = $usuario->registrarUsuario($nombre, $contraseña);

        /*
        //Verificar el resultado del registro
        if($registroExitoso) {
            //Redirigir a la página de registro exitoso
            header("Location: ../vistas/registro_exitoso.php");
            exit();
        }else {
            //Redirigir a la página de registro con un mensaje de error
            header("Location: ../vistas/register.php?error=RegistroFallido");
            exit();
        }
    }else {
        //Redirigir a la página de registro en caso de una solicitud incorrecta (no es POST)
        header("Location: ../vistas/register.php");
        exit();
    }
    */
    }
?>
