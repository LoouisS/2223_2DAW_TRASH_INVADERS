<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="David, Antonio y Guillermo" />
    <title>Mejoras</title>
    <link rel="stylesheet" href="src/css/new_style.css">
    <link rel="icon" type="image/png" href="../src/img/logo.jpg">
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
                    <th>Activado</th>
                    <th>Eliminar</th>          
                </tr>
            </thead>
            <tbody>
                <?php
                    if (!is_iterable($mejoras) || count($mejoras) === 0) {
                        echo "<tr ><td colspan='6'>No hay Mejoras</td></tr>";
                    } else {
                        foreach ($mejoras as $mejora) {
                            echo "<tr>";
                                echo "<td>" . pathinfo($mejora['nombre'], PATHINFO_FILENAME) . "</td>";
                                echo "<td><img src='data:image/jpeg;base64," . $imagen['imagen'] . "' alt='" . $imagen['nombre'] . "'></td>";
                                echo "<td><a href='index.php?controlador=ControladorMejora&action=eliminarMejora&idMejora=" . $mejora['idMejora'] . "'>Eliminar</a></td>";
                            echo "</tr>";
                        }
                    }
                ?>
            </tbody>
        </table>
        <!-- Formulario para agregar mejora -->

        <form action="index.php?controlador=ControladorMejora&action=agregarMejora" method="post">
            <label>Descripción:</label>
            <input type="text" name="descripcion" required>
            <label>Multiplicador:</label>
            <input type="number" name="multiplicador" required>
            <label>Duración Mejora:</label>
            <input type="number" name="duracionMejora" required>
            <label>Activado:</label>
            <input type="number" name="activado" required>
            <button type="submit">Agregar Mejora</button>
        </form>

        <button id="volvermenu"><a href="index.php">Volver</a></button>
    </main>
</body>
</html>



<?php
/*
            echo '<table border="1px" id="tmejoras">';
            echo '<tr>';
            echo '<th>Imagen</th>';
            echo '<th>Descripción</th>';
            echo '<th>Número</th>';
            echo '<th>Porcentaje</th>';
            echo '<th>Acciones</th>';
            echo '</tr>';

            // Verificar si $mejoras está definido y es un array
            if (isset($mejoras) && is_array($mejoras)) {
                foreach ($mejoras as $mejora) {
                    echo '<tr>';
                    // Celda 1: Imagen
                    echo '<td>';
                    echo '<img src="../src/img/gato.png" alt="Descripción imagen">';
                    echo '<br>';
                    echo '<a href="bimagenesusuario.html" >';
                    echo '<button id="bimagenesusuario">Cambiar Imagen</button>';
                    echo '</a>';
                    echo '</td>';
                    // Celda 2: Descripción
                    echo '<td>' . $mejora['descripcion'] . '</td>';
                    // Celda 3: Número
                    echo '<td>' . $mejora['numero'] . '</td>';
                    // Celda 4: Porcentaje
                    echo '<td>' . $mejora['porcentaje'] . '</td>';
                    // Celda 5: Botón Borrar
                    echo '<td><button class="borrar" data-id="' . $mejora['id'] . '">Borrar</button></td>';
                    echo '</tr>';
                }
            } else {
                echo '<tr><td colspan="5">No hay mejoras disponibles</td></tr>';
            }

            echo '</table>';
*/
?>





