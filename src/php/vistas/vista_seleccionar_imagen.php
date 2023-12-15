<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/style_servidor.css">
    <link rel="icon" type="image/png" href="src/img/logo.jpg">
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
        <form method="POST" id="formseleccionar" action="index.php?controlador=Imagenes&action=seleccionarImagen">
            <table>
                <thead>
                    <tr>
                        <th>Imagen<br></th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        if (!is_iterable($imagenes) || count($imagenes) === 0) {
                            echo "<tr><td colspan='3'>No hay imágenes</td></tr>";
                        } else {
                            foreach ($imagenes as $imagen) {
                                echo "<tr>";
                                echo "<td><input type='radio' name='seleccionImagen' value='{$imagen['idImagen']}'></td>";
                                echo "<td>" . pathinfo($imagen['nombre'], PATHINFO_FILENAME) . "</td>";
                                echo "<td><img src='data:image/jpeg;base64," . $imagen['imagen'] . "' alt='" . $imagen['nombre'] . "'></td>";
                                echo "</tr>";
                            }
                        }

                        // Manejar la selección de imagen y mostrarla si está seleccionada
                        if (isset($_SESSION['selectedImage'])) {
                            $selectedImage = $_SESSION['selectedImage'];
                            echo "<div>";
                            echo "<h2>Imagen Seleccionada</h2>";
                            echo "<img src='data:image/jpeg;base64," . $selectedImage['imagen'] . "' alt='" . $selectedImage['nombre'] . "'>";
                            echo "</div>";

                            // Limpiar la imagen seleccionada de la sesión después de mostrarla
                            unset($_SESSION['selectedImage']);
                        }
                    ?>
                </tbody>
            </table>
            <input type="submit" value="Seleccionar">
        </form>
    </main>
</body>
</html>
