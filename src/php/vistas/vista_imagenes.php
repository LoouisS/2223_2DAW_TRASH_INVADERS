<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="src/css/new_style.css">
        <title>Banco de Imagenes</title>
        <style>
            img {
                width: 150px;
                height: 150px;
            }

            table {
                border-collapse: collapse;
                margin: 0 auto;
            }

            a {
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <main id="register-page">
            <div id="div-superior">
                <h1>Banco de Imagenes</h1>
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
                            echo "<td>" . pathinfo($imagen['nombre'], PATHINFO_FILENAME) . "</td>";
                            echo "<td><img src='data:image/jpeg;base64," . $imagen['imagen'] . "' alt='" . $imagen['nombre'] . "'></td>";
                            echo "<td><a href='index.php?controlador=Imagenes&action=confirmarBorrado&idImagen=" . $imagen['idImagen'] . "'>Eliminar</a></td>";
                            echo "</tr>";
                        }
                    }
                    ?>
                </tbody>
            </table>
            <form method="POST" enctype="multipart/form-data" id="formsubir" action="index.php?controlador=Imagenes&action=confirmaSubida">
                <input type="file" name="imagenes[]" accept=".png,.jpg,.jpeg," multiple><br/>
                <input type="submit" value="SUBIR">
            </form>
            <button id="subir" ><a href="index.php">Volver</a></button>
        </main>
    </body>
</html>
