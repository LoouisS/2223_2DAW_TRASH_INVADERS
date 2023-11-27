<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../src/css/new_style.css">
        <meta name="author" content="David, Antonio y Guillermo"/>
        <title>TRASH INVADERS</title>
        <link rel="icon" type="image/png" href="../src/img/logo.jpg">
    </head>
    <body>
        <main id="register-page">
            <div class="div-superior">
                <a href="index.html"><h1>REGISTRAR USUARIO</h1></a>
            </div>
            <div class="div-inferior">
               <form method="POST" action="../controladores/registro.php">
                    <label for="nombre">Nombre</label>                 
                    <input type="text" id="nombre" name="nombre">
                    <br>
                    <label for="contraseña">Contraseña</label>
                    <input type="password" id="contraseña" name="contraseña">
                    <br>
                    <input type="submit" value="REGISTRARSE">
                </form>
            </div>
        </main>
    </body>
</html>


