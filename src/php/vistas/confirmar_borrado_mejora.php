<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Borrado</title>
        <link rel="stylesheet" href="src/css/new_style.css">
    </head>
    <body id="register-page">
        <main id="login-page">
            <div class="div-superior">
                <h1>Confirmación de Borrado</h1>
            </div>
            
            <div class="eliminarconfir">
                <!-- Muestra la información de la mejora a borrar -->
                <p>Descripción: <?php echo $mejora['descripcion']; ?></p>
                <p>Multiplicador: <?php echo $mejora['multiplicador']; ?></p>
                <p>Duración Mejora: <?php echo $mejora['duracionMejora']; ?></p>
            </div>
            
            <h1 class="eliminarconfir">¿Estás seguro de que deseas eliminar esta mejora?</h1>              
            <?php echo "<button><a href='index.php?controlador=ControladorMejora&action=ejecucionBorrado&idMejora=" . $_GET['idMejora'] . "'>Eliminar</a></button>"; ?>
            <div>
                <button><a href="index.php?controlador=ControladorMejora&action=mostrarMejoras">Cancelar</a></button>
            </div>  
        </main>        
    </body>
</html>


