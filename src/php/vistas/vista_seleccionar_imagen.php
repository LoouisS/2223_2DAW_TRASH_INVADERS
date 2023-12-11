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
        <form method="POST" id="formSeleccionarImagen" action="index.php?controlador=ControladorMejora&action=seleccionarImagen">
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (!is_iterable($imagenes) || count($imagenes) === 0) {
                        echo "<tr><td colspan='3'>No hay imágenes</td></tr>";
                    } else {
                        foreach ($imagenes as $imagen) {
                            echo "<tr>";
                            echo "<td><input type='radio' name='seleccionImagen' value='{$imagen['idImagen']}'><img src='data:image/jpeg;base64," . $imagen['imagen'] . "' alt='" . $imagen['nombre'] . "'></td>";
                            echo "</tr>";
                        }
                    }
                    ?>
                </tbody>
            </table>
            <input type="submit" value="Seleccionar">
        </form>
    </main>
</body>
</html>
