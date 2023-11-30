<?php
    // Array de descripciones
    $descripciones = array(
        'Correr mas rapido',
        'Mas puntos',
        'Recogida automatica',
        // Agrega más descripciones según sea necesario
    );
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="David, Antonio y Guillermo" />
        <title>Mejoras</title>
        <link rel="stylesheet" href="src/css/new_style.css">
        <link rel="icon" type="image/png" href="src/img/logo.jpg">
    </head>
    <body>
        <main id="register-page">
            <div class="div-superior">
                <label><h1>Mejoras</h1></label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Imagen Mejora</th>
                        <th>Descripcion</th>
                        <th>Multiplicador</th>
                        <th>Duracion Mejora</th>
                        <th>Porcentaje de Aparicion</th>
                        <th>Eliminar</th>          
                    </tr>
                </thead>


                <tbody>
                    <?php
                        if (!is_iterable($mejoras) || count($mejoras) === 0) {
                            echo "<tr><td colspan='6'>No hay Mejoras</td></tr>";
                        } else {
                            foreach ($mejoras as $mejora) {
                                echo "<tr>";
                                echo "<td><a href='index.php?controlador=Imagenes&action=mostrarImagen&" . http_build_query(['idMejora' => $mejora['idMejora']]) . "'>Seleccionar Imagen</a></td>";
                                echo "<td>" . $mejora['descripcion'] . "</td>";
                                echo "<td>" . $mejora['multiplicador'] . "</td>";
                                echo "<td>" . $mejora['duracionMejora'] . "</td>";
                                echo "<td>" . $mejora['porcentaje_aparicion'] . "</td>";

                                // Puedes acceder al idMejora aquí
                                echo "<td><a href='index.php?controlador=ControladorMejora&action=confirmarBorrado&idMejora=" . $mejora['idMejora'] . "'>Eliminar</a></td>";
                                echo "</tr>";
                                
                            }
                        }
                    ?>
                </tbody>
            </table>
            <!-- Formulario para agregar mejora -->
            <form action="index.php?controlador=ControladorMejora&action=agregarMejora" method="post">
                <!-- Modifica el formulario para usar un campo desplegable -->
                <label>Descripción:</label>
                <select name="descripcion" required id="descripcion" >
                    <?php
                        foreach ($descripciones as $descripcion) {
                            echo "<option value='{$descripcion}'>{$descripcion}</option>";
                        }
                    ?>
                </select>
                
                <label>Multiplicador:</label>
                <input type="number" name="multiplicador" required>
                <label>Duración Mejora:</label>
                <input type="number" name="duracionMejora" required>
                <label>Porcentaje de Aparicion:</label>
                <input type="number" name="porcentaje_aparicion" required>
                <button type="submit">Agregar Mejora</button>
            </form>

            <button id="volvermenu"><a href="index.php">Volver</a></button>
        </main>
    </body>
</html>
