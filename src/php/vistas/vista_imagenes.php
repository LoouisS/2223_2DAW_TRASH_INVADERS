<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="src/css/new_style.css">
        <title>Banco de Imagenes</title>
    </head>
    <body>
        <main id="register-page">
            <div class="div-superior">
                <label><h1 id="h1imagenes">Banco de Imagenes</h1></label>
            </div>
            <table id="imagenestabla">
                <thead>
                    <tr>
                        <th>Nombre Imagen</th>
                        <th>Imagen</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (!is_iterable($imagenes) || count($imagenes) === 0) {
                        echo "<tr ><td colspan='3'>No hay imágenes</td></tr>";
                    } else {
                        foreach ($imagenes as $imagen) {
            
                            echo "<tr>";
                            echo "<td>" . $imagen['nombre'] . "</td>";
                            echo "<td><img src='data:image/jpeg;base64," . $imagen['imagen'] . "' alt='" . $imagen['nombre'] . "'></td>";
                            echo "<td><a href='index.php?controller=imagenes&action=borrarImagen&idImagen=" . $imagen['idImagen'] . "'>Eliminar</a></td>";
                            echo "</tr>";
                        }
                    }
                    ?>
                </tbody>
            </table>
            <div id="volvermenu">
                <a href="menup.html">MENU</a>
            </div>
            <form method="POST" enctype="multipart/form-data" id="formsubir" action="index.php?controller=imagenes&action=subirImagenes">
                <input type="file" name="imagenes[]" accept=".png,.jpg,.jpeg," multiple><br/>
                <input type="submit" value="SUBIR">
            </form>
        </main>
    </body>
</html>
