<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="src/css/style_servidor.css">
        <meta name="author" content="David, Antonio y Guillermo" />
        <title>Menu Principal</title>
        <link rel="icon" type="image/png" href="src/img/logo.jpg">
    </head>
    <body>
    <main id="login-page">
        <div class="div-superior">
            <div id="contenedor-imagen">
                <img src="src/img/logo.jpg" alt="logo-imagen"></a>
            </div>
        </div>           
        <?php
        // Verifica si hay una sesión activa
        if (isset($_SESSION['usuario'])) {
            echo "<p>Bienvenido, " . $_SESSION['usuario'] . "!</p>";
        } else {
            echo "<p>Usuario no autenticado</p>";
        }
        ?>
        <button ><a href="juego.html">JUGAR</a></button>
        <button ><a href="index.php?controlador=ControladorMejora&action=mostrarMejoras">MEJORAS</a></a></button>
        <button ><a href="clasificaciones.html">CLASIFICACIONES</a></button>
        <button ><a href="index.php">SALIR</a></button>
    </main>
</body>
</html>