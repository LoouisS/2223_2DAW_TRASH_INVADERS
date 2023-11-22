<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="src/css/new_style.css">
        <title>Banco de Imagenes</title>
        <style>
        </style>
    </head>
    <body>
        <main id="register-page">
            <div id="div-superior">
                <label><h1>Banco de Imagenes</h1></label>
            </div>
            <div id="tmejoras">
            <form id="formborrar" method="POST" action="delete_images.php">
                <?php foreach ($imagenes as $imagen) { ?>
                    <div class="imagen-container">
                        <input type="checkbox" name="selectedImages[]" value="<?php echo $imagen['idImagen']; ?>">
                        <img src="data:image/jpeg;base64,<?php echo $imagen['imagen']; ?>" alt="Descripción imagen">
                        <br>
                        <?php echo $imagen['nombre']; ?>
                    </div>
                <?php } ?>
                <input type="submit" value="Borrar">
            </form>
            </div>
            <div id="volvermenu">
                <a href="menup.html">MENU</a>
            </div>
            <form method="POST" enctype="multipart/form-data" id="formsubir">
                <input type="file" name="imagen" accept=".png,.jpg,.jpeg," multiple><br/>
                <input type="submit" value="SUBIR">
            </form>

        </main>
    </body>
</html>
