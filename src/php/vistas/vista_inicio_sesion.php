<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="src/css/style_servidor.css">
        <meta name="author" content="David, Antonio y Guillermo" />
        <title>Inicio de Sesion</title>
        <link rel="icon" type="image/png" href="src/img/logo.jpg">
    </head>
    <body>
        <main id="login-page">
            <div class="div-superior">
                <div id="contenedor-imagen">
                    <a href="index.html"><img src="src/img/logo.jpg" alt="logo-imagen"></a>
                </div>
            </div>
            <div class="div-inferior">
                <form action="index.php?controlador=ControladorInicioSesion&action=iniciarSesion" method="post">
                    <label for="username">Usuario</label>
                    <input type="text" id="username" name="username" required>
                    <br>
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required>
                    <br>
                    <button type="submit">INICIAR SESIÓN</button>
                </form>
            </div>
        </main>
    </body>
</html>
